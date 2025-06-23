import React from 'react'

const TextRender = () => {
 const Score = 80;

  return (
    <div>
      {Score >=55 ? <p>You have passed</p> : <p>Try Again</p>}
    </div>
  );
};

export default TextRender