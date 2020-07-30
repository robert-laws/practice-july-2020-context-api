import React, { useContext } from 'react';
import TodosContext from '../../context/todos/todosContext';

const Todo = ({ id, text, completed }) => {
  const todosContext = useContext(TodosContext);

  const { updateTodo, deleteTodo } = todosContext;

  return (
    <div>
      <p>
        {text}
        <input
          type='checkbox'
          checked={completed}
          onChange={() => updateTodo(id)}
        />
      </p>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
