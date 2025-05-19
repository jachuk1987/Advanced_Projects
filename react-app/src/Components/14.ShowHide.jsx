import React, { useState } from 'react';

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Show / Hide Example</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default ShowHide;
