import React from 'react';
import UserList from '../Users/UserList';
import NewUser from '../Users/NewUser';

const MainSection = () => {
  return (
    <main>
      <h3>Website Content</h3>
      <hr />
      <UserList />
      <hr />
      <NewUser />
    </main>
  );
};

export default MainSection;
