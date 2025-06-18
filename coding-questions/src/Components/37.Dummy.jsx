import React from 'react'
import CustomHook from './37.CustomHook';

const Dummy = () => {
    const [count, Increment, Decrement, Reset] = CustomHook(0)
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <p>{count}</p>
    </div>
  )
}

export default Dummy;
