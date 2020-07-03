import { GET_USERS, ADD_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    default:
      return state;
  }
};
