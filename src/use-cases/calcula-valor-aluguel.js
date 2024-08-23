export const calculaValorAluguel = (veiculo, aluguel, differenceInDays) => {
  const { valor_diaria } = veiculo;
  const { data_inicio, data_fim } = aluguel;
  const dias = differenceInDays(new Date(data_fim), new Date(data_inicio));
  return dias * valor_diaria;
};