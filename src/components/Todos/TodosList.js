import React, { useContext, useEffect } from 'react';
import TodosContext from '../../context/todos/todosContext';
import Todo from './Todo';

const TodosList = () => {
  const todosContext = useContext(TodosContext);

  const { todos, getTodos } = todosContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Todos...</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodosList;
