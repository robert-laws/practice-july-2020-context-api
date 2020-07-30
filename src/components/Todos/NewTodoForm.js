import React, { useContext, useState } from 'react';
import TodosContext from '../../context/todos/todosContext';

const NewTodoForm = () => {
  const todosContext = useContext(TodosContext);

  const { addTodo } = todosContext;

  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(text);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo Text: </label>
      <input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='add todo text'
      />
    </form>
  );
};

export default NewTodoForm;
