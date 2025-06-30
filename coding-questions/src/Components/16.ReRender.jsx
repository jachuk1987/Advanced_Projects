import React, { useState, useEffect } from 'react';

const ReRenderExample = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello');

  // useEffect runs on `count` change
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>React Re-render Example</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <hr />

      <p>Message: {message}</p>
      <button onClick={() => setMessage('World')}>Change Message</button>
    </div>
  );
};

export default ReRenderExample;
