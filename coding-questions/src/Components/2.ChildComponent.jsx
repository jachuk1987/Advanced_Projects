// ChildComponent.js
import React from 'react';

const ChildComponent = ({ message, name }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>From: {name}</p>
    </div>
  );
};

export default ChildComponent;
