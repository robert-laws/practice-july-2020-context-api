import React from 'react';
import './App.scss';

import UserState from './context/users/UserState';
import MainSection from './components/UI/MainSection';

function App() {
  return (
    <>
      <UserState>
        <div className='App'>
          <h1>App</h1>
          <MainSection />
        </div>
      </UserState>
    </>
  );
}

export default App;
