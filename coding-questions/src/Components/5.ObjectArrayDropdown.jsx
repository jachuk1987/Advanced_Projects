import React, { useState } from 'react';

const ObjectArrayDropdown = () => {
  const languages = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <div>
      <h3>Select a Language:</h3>
      <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
        <option value="">-- Select --</option>
        {languages.map(lang => (
          <option value={lang.name} key={lang.id}>{lang.name}</option>
        ))}
      </select>

      <p>Selected: {selectedLanguage}</p>
    </div>
  );
};

export default ObjectArrayDropdown;
