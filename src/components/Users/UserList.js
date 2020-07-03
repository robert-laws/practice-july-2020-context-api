import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/users/userContext';
import User from './User';

const UserList = () => {
  const userContext = useContext(UserContext);

  const { users, getUsers } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (!users) {
    return (
      <div>
        <h4>No Users Found</h4>
      </div>
    );
  }

  return (
    <div>
      <h4>Users</h4>
      {users !== null &&
        users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
