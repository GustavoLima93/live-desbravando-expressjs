import {
  getVeiculoById,
  getVeiculos,
  createVeiculo,
  updateVeiculo,
  deleteVeiculo
} from '../dao/veiculos.dao.js';

// dominio/veiculos?page=1&size=10

export const getVeiculosController = async (req, res) => {
  const { page = 1, size = 10 } = req.query;
  const veiculos = await getVeiculos(page, size);

  res.status(200).json(veiculos);
}

// dominio/veiculos/1

export const getVeiculoByIdController = async (req, res) => {
  const { id } = req.params;
  const veiculo = await getVeiculoById(id);

  res.status(200).json(veiculo);
}

export const createVeiculoController = async (req, res) => {
  const veiculo = req.body;
  const { id } = await createVeiculo(veiculo);

  res.status(201).json({ id });
}

export const updateVeiculoController = async (req, res) => {
  const { id } = req.params;
  const veiculo = req.body;
  await updateVeiculo(id, veiculo);

  res.status(204).end();
}

export const deleteVeiculoController = async (req, res) => {
  const { id } = req.params;
  await deleteVeiculo(id);

  res.status(204).end();
}
