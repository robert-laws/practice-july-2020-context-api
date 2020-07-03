import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USERS, ADD_USER } from '../types';
import { users } from '../data/usersData';

const UserState = ({ children }) => {
  const initialState = {
    users: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = () => {
    dispatch({ type: GET_USERS, payload: users });
  };

  const addUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        getUsers,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
