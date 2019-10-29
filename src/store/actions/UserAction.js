export const setPaciente = (nome, cpf, telefone, endereco, id, email) => {
  return {
    type: '@paciente/set',
    payload: {
      nome,
      cpf,
      telefone,
      endereco,
      id,
      email,
    },
  };
};
