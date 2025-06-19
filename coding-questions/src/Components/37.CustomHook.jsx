import React, { useState } from 'react'

const CustomHook = () => {
    const [count, setCount] = useState(0);
    const Increment = () => { setCount(count + 1) }
    const Decrement = () => { setCount(count - 1) }
    const Reset = () => { setCount(0) }

    return [count, Increment, Decrement, Reset]

}

export default CustomHook;
