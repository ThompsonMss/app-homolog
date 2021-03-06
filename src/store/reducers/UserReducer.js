const INITIAL_STATE = {
  nome: 'José',
  cpf: '',
  telefone: '',
  uf: '',
  cidade: '',
  rua: '',
  numero: '',
  cep: '',
  email: '',
  id: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@paciente/set':
      return { ...state, ...action.payload };
    case '@paciente/get':
      return state;
    default:
      return state;
  }
};

export default UserReducer;
