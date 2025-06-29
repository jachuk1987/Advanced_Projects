import React from 'react';

const DisplayObject = () => {
  const user = {
    name: 'Jachu',
    age: 25,
    role: 'Frontend Developer'
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h3>User Details</h3>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayObject;
