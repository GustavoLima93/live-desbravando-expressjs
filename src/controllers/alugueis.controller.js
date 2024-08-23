import { differenceInDays } from 'date-fns';

import {
  getAluguelById,
  getAlugueis,
  createAluguel,
  updateAluguel,
  deleteAluguel
} from '../dao/alugueis.dao.js';
import { calculaValorAluguel } from '../use-cases/calcula-valor-aluguel.js';

import { getVeiculoById } from '../dao/veiculos.dao.js';

// dominio/alugueis?page=1&size=10

export const getAlugueisController = async (req, res) => {
  const { page = 1, size = 10 } = req.query;
  const alugueis = await getAlugueis(page, size);

  res.status(200).json(alugueis);
}

// dominio/alugueis/1

export const getAluguelByIdController = async (req, res) => {
  const { id } = req.params;
  const aluguel = await getAluguelById(id);

  res.status(200).json(aluguel);
}

export const createAluguelController = async (req, res) => {
  const aluguel = req.body;
  const veiculo = await getVeiculoById(aluguel.id_veiculo);
  const valorTotalDoAluguel = calculaValorAluguel(veiculo, aluguel, differenceInDays);
  const { id } = await createAluguel({...aluguel, valor_total: valorTotalDoAluguel});
  
  res.status(201).json({ id });
}

export const updateAluguelController = async (req, res) => {
  const { id } = req.params;
  const aluguel = req.body;
  await updateAluguel(id, aluguel);

  res.status(204).end();
}

export const deleteAluguelController = async (req, res) => {
  const { id } = req.params;
  await deleteAluguel(id);

  res.status(204).end();
}