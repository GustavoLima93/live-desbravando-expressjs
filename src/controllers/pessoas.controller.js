import {
  getPessoaById,
  getPessoas,
  createPessoa,
  updatePessoa,
  deletePessoa
} from '../dao/pessoas.dao.js';

// dominio/pessoas?page=1&size=10

export const getPessoasController = async (req, res) => {
  const { page = 1, size = 10 } = req.query;
  const pessoas = await getPessoas(page, size);

  res.status(200).json(pessoas);
}

// dominio/pessoas/1

export const getPessoaByIdController = async (req, res) => {
  const { id } = req.params;
  const pessoa = await getPessoaById(id);

  res.status(200).json(pessoa);
}

export const createPessoaController = async (req, res) => {
  const pessoa = req.body;
  const { id } = await createPessoa(pessoa);

  res.status(201).json({ id });
}

export const updatePessoaController = async (req, res) => {
  const { id } = req.params;
  const pessoa = req.body;
  await updatePessoa(id, pessoa);

  res.status(204).end();
}

export const deletePessoaController = async (req, res) => {
  const { id } = req.params;
  await deletePessoa(id);

  res.status(204).end();
}