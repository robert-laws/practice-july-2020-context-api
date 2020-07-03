import React from 'react';

const User = ({ user: { firstName, lastName } }) => {
  return (
    <div>
      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
};

export default User;
