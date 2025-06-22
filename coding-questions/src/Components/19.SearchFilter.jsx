import React, { useState, useEffect } from 'react';

const SearchInput = () => {
  const [inputTerm, setInputTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const users = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve',
    'Frank', 'Grace', 'Hannah', 'Isaac', 'Julia'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(inputTerm);
    }, 5000);

    return () => clearTimeout(timer); 
  }, [inputTerm]);

  const filtered = users.filter((usr) =>
    usr.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
        placeholder="Search Users..."
      />
      <ul>
        {filtered.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;