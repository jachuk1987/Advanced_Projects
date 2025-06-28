import React, { useState } from 'react';

const MirrorTextbox = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Mirror Input</h3>

      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: '1rem' }}
      />

      <input
        type="text"
        placeholder="Mirrored here"
        value={text}
        readOnly // Optional: makes second box non-editable
      />
    </div>
  );
};

export default MirrorTextbox;
