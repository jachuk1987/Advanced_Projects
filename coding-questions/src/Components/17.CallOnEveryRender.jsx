import React, { useState } from 'react';

const CallOnEveryRender = () => {
  const [count, setCount] = useState(0);

  // This function runs on every render
  const logRender = () => {
    console.log('Component rendered');
  };

  logRender(); // 👈 Called every render

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};

export default CallOnEveryRender;
