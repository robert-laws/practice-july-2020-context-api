import React from 'react';
import './App.scss';

import UserState from './context/users/UserState';
import TodosState from './context/todos/TodosState';
import MainSection from './components/UI/MainSection';

function App() {
  return (
    <>
      <UserState>
        <TodosState>
          <div className='App'>
            <h1>App</h1>
            <MainSection />
          </div>
        </TodosState>
      </UserState>
    </>
  );
}

export default App;
