// ParentComponent.js
import React from 'react';
import ChildComponent from './2.ChildComponent';

const ParentComponent = () => {
  const message = "Hello from parent!";
  const senderName = "Jeswanth";

  return (
    <div>
      <h1>This is the Parent Component</h1>
      {/* Passing props to child */}
      <ChildComponent message={message} name={senderName} />
    </div>
  );
};

export default ParentComponent;
