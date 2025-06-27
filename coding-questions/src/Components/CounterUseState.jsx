import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial count is 0

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: '0.5rem' }}>+</button>
      <button onClick={decrement} style={{ margin: '0.5rem' }}>-</button>
      <button onClick={reset} style={{ margin: '0.5rem' }}>Reset</button>
    </div>
  );
};

export default Counter;
