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

import React, { useState } from 'react'

const CustomHook = () => {
    const [count, setCount] = useState(0);
    const Increment = () => { setCount(count + 1) }
    const Decrement = () => { setCount(count - 1) }
    const Reset = () => { setCount(0) }

    return [count, Increment, Decrement, Reset]

}

export default CustomHook;
