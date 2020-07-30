import React, { useState, useContext } from 'react';
import { uuid } from 'uuidv4';
import UserContext from '../../context/users/userContext';

const NewUser = () => {
  const [user, setUser] = useState({
    id: uuid(),
    firstName: '',
    lastName: '',
    age: '0',
    level: 'beginner',
  });
  const userContext = useContext(UserContext);
  const { addUser } = userContext;

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({
      id: uuid(),
      firstName: '',
      lastName: '',
      age: '0',
      level: 'beginner',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type='text'
          name='firstName'
          value={user.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name: </label>
        <input
          type='text'
          name='lastName'
          value={user.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Age: </label>
        <input
          type='number'
          name='age'
          value={user.age}
          onChange={handleChange}
        />
        <br />
        <label>Level: </label>
        <select id='level' name='level' onChange={handleChange}>
          <option value='beginner'>Beginner</option>
          <option value='professional'>Professional</option>
        </select>
        <br />
        <input type='submit' value='Add New User' />
      </form>
    </div>
  );
};

export default NewUser;
