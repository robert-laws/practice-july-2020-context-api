import React, { useReducer } from 'react';
import TodosContext from './todosContext';
import todosReducer from './todosReducer';
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../types';

const TodosState = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: Date.now(),
        text: 'Eat lunch',
        completed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const getTodos = () => {
    dispatch({ type: GET_TODOS });
  };

  const addTodo = (text) => {
    dispatch({ type: ADD_TODO, payload: text });
  };

  const updateTodo = (id) => {
    dispatch({ type: UPDATE_TODO, payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
