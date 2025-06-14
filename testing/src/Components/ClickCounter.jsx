import React, { useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>(setCount(count+1))}>Increase</button>
      <button onClick={()=>(setCount(count-1))}>Decrement</button>
      <button onClick={()=>(setCount(0))}>Reset</button>

      <p>{count}</p>
    </div>
  )
};

export default ClickCounter;
