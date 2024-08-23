import db from '../database/index.js';

export const getVeiculos = async (page, size) => {
  const offset = (page - 1) * size;
  const veiculos = await db('veiculos')
    .select('*')
    .limit(size)
    .offset(offset);
  
  return veiculos;
}

export const getVeiculoById = async (id) => {
  const veiculo = await db('veiculos')
    .select('*')
    .where({ id })
    .first();

  return veiculo;
}

export const createVeiculo = async (veiculo) => {
  const [id] = await db('veiculos')
    .insert(veiculo);

  return { id };
}

export const updateVeiculo = async (id, veiculo) => {
  await db('veiculos')
    .where({ id })
    .update(veiculo);
}

export const deleteVeiculo = async (id) => {
  await db('veiculos')
    .where({ id })
    .delete();
}