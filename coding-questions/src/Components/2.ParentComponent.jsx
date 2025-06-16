// ParentComponent.js
import React from 'react';
import ChildComponent from './2.ChildComponent';

const ParentComponent = () => {
  const greeting = "Hello from Parent!";

  return (
    <div>
      <h1>This is the Parent</h1>
      {/* Passing 'greeting' to the child as a prop */}
      <ChildComponent message={greeting} />
    </div>
  );
};

export default ParentComponent;
