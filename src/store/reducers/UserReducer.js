const INITIAL_STATE = {
  nome: '',
  cpf: '',
  telefone: '',
  endereco: '',
  email: '',
  id: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@paciente/set':
      return {...state, ...action.payload};
    case '@paciente/get':
      return state;
    default:
      return state;
  }
};

export default UserReducer;
