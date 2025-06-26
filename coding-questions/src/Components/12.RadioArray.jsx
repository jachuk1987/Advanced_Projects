import React, { useState } from 'react';

const RadioArray = () => {
  const languages = ['HTML', 'CSS', 'JavaScript'];
  const [selected, setSelected] = useState('');

  return (
    <div>
      <h3>Select a Language</h3>
      {languages.map((lang, index) => (
        <label key={index} style={{ display: 'block' }}>
          <input
            type="radio"
            value={lang}
            checked={selected === lang}
            onChange={(e) => setSelected(e.target.value)}
          />
          {lang}
        </label>
      ))}
      <p>You selected: <strong>{selected || "None"}</strong></p>
    </div>
  );
};

export default RadioArray;
