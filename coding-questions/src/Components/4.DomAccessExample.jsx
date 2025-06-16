import React, { useRef } from 'react';

const DomAccessExample = () => {
  const inputRef = useRef(null); // 1. Create a ref

  const handleClick = () => {
    // 2. Access the DOM element
    inputRef.current.focus(); // For example, focus the input
    console.log("Input value is:", inputRef.current.value);
  };

  return (
    <div>
      <h2>Access DOM Example</h2>
      {/* 3. Attach ref to DOM element */}
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleClick}>Focus Input & Log Value</button>
    </div>
  );
};

export default DomAccessExample;
