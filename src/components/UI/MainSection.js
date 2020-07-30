import React from 'react';
import UserList from '../Users/UserList';
import NewUserForm from '../Users/NewUserForm';
import TodosList from '../Todos/TodosList';
import NewTodoForm from '../Todos/NewTodoForm';

const MainSection = () => {
  return (
    <main>
      <section>
        <h3>Todo App</h3>
        <hr />
        <UserList />
        <hr />
        <NewUserForm />
      </section>
      <section>
        <TodosList />
        <NewTodoForm />
      </section>
    </main>
  );
};

export default MainSection;
