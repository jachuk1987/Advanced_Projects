import React from 'react';

const InputChild = ({ onTextChange }) => {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input 
        type="text" 
        placeholder="Enter some text..." 
        onChange={handleChange} 
      />
    </div>
  );
};

export default InputChild;
