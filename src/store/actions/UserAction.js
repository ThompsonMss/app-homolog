export const setPaciente = (nome, cpf, telefone, cep, uf, cidade, rua, numero, id, email) => {
  return {
    type: '@paciente/set',
    payload: {
      nome, cpf, telefone, cep, uf, cidade, rua, numero, id, email
    },
  };
};
