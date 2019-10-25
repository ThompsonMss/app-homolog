const INITIAL_STATE = {
  email: '',
  name: '',
  password: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/request_login':
      return state;
    default:
      return state;
  }
};

export default UserReducer;
