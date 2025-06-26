import React, { useState } from 'react';

const RadioObjectArray = () => {
  const frameworks = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Vue' }
  ];

  const [selected, setSelected] = useState('');

  return (
    <div>
      <h3>Select a Framework</h3>
      {frameworks.map((fw) => (
        <label key={fw.id} style={{ display: 'block' }}>
          <input
            type="radio"
            name="framework"
            value={fw.name}
            checked={selected === fw.name}
            onChange={(e) => setSelected(e.target.value)}
          />
          {fw.name}
        </label>
      ))}
      <p>You selected: <strong>{selected || "None"}</strong></p>
    </div>
  );
};

export default RadioObjectArray;
