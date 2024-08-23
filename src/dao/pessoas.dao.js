import db from '../database/index.js';

export const getPessoas = async (page, size) => {
  const offset = (page - 1) * size;
  const pessoas = await db('pessoas')
    .select('*')
    .limit(size)
    .offset(offset);
  
  return pessoas;
}

export const getPessoaById = async (id) => {
  const pessoa = await db('pessoas')
    .select('*')
    .where({ id })
    .first();

  return pessoa;
}

export const createPessoa = async (pessoa) => {
  const [id] = await db('pessoas')
    .insert(pessoa);

  return { id };
}

export const updatePessoa = async (id, pessoa) => {
  await db('pessoas')
    .where({ id })
    .update(pessoa);
}

export const deletePessoa = async (id) => {
  await db('pessoas')
    .where({ id })
    .delete();
}