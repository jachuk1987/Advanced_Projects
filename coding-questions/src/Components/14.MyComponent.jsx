import React, { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // 1. Fetch API data
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    // 2. Read from localStorage
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
    }

    // 3. Focus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }

    fetchUser();
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>React useEffect on Mount Example</h2>

      {/* LocalStorage Data */}
      <p>
        Welcome, <strong>{username || 'Guest'}</strong>
      </p>

      {/* API Data */}
      <div>
        <h3>User Info from API:</h3>
        {user ? <p>Name: {user.name}</p> : <p>Loading user...</p>}
      </div>

      {/* Auto-Focus Input */}
      <div>
        <h3>Auto-Focused Input:</h3>
        <input
          type="text"
          ref={inputRef}
          placeholder="This input is focused on load"
        />
      </div>
    </div>
  );
};

export default MyComponent;
