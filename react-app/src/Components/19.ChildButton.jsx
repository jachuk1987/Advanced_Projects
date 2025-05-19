import React from 'react';

const ChildButton = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Click to Update Parent</button>
    </div>
  );
};

export default ChildButton;
