import db from '../database/index.js';

export const getAlugueis = async (page, size) => {
  const offset = (page - 1) * size;
  const alugueis = await db('alugueis')
    .select(
      'alugueis.id as id_aluguel',
      'alugueis.data_inicio',
      'alugueis.data_fim',
      'alugueis.valor_total',
      'pessoas.nome as pessoa_nome',
      'veiculos.modelo as veiculo_modelo'
    )
    .innerJoin('pessoas', 'alugueis.id_pessoa', 'pessoas.id')
    .innerJoin('veiculos', 'alugueis.id_veiculo', 'veiculos.id')
    .limit(size)
    .offset(offset);
  
  return alugueis;
}

export const getAluguelById = async (id) => {
  const aluguel = await db('alugueis')
    .select(
      'alugueis.id as id_aluguel',
      'alugueis.data_inicio',
      'alugueis.data_fim',
      'alugueis.valor_total',
      'pessoas.nome as pessoa_nome',
      'veiculos.modelo as veiculo_modelo'
    )
    .innerJoin('pessoas', 'alugueis.id_pessoa', 'pessoas.id')
    .innerJoin('veiculos', 'alugueis.id_veiculo', 'veiculos.id')
    .where("id_aluguel", id)
    .first();

  return aluguel;
}

export const createAluguel = async (aluguel) => {
  const [id] = await db('alugueis')
    .insert(aluguel);

  return { id };
}

export const updateAluguel = async (id, aluguel) => {
  await db('alugueis')
    .where({ id })
    .update(aluguel);
}

export const deleteAluguel = async (id) => {
  await db('alugueis')
    .where({ id })
    .delete();
}