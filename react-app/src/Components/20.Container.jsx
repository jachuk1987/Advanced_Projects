import React, { useState } from 'react';
import InputChild from './20.InputChild';
import DisplayChild from './20.DisplayChild';

const Container = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sibling Communication Example</h2>
      <InputChild onTextChange={setText} />
      <DisplayChild text={text} />
    </div>
  );
};

export default Container;
