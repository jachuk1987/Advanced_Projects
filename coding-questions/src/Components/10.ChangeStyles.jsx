import React, { useState } from 'react';

function ChangeStyles() {
  const [isDark, setIsDark] = useState(false);
  const [status, setStatus] = useState('online');

  // Define inline styles
  const headingStyle = {
    color: isDark ? 'white' : 'black',
    backgroundColor: isDark ? '#333' : '#eee',
    padding: '10px',
    borderRadius: '5px'
  };

  const statusStyle = {
    color: status === 'online' ? 'green' : 'gray',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '10px'
  };

  const boxStyle = {
    backgroundColor: isDark ? '#222' : '#f9f9f9',
    color: isDark ? 'white' : 'black',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={headingStyle}>
        Theme is {isDark ? 'Dark' : 'Light'}
      </h2>

      <p style={statusStyle}>
        Status: {status}
      </p>

      <div style={boxStyle}>
        This box changes background
      </div>

      <br />

      <button style={buttonStyle} onClick={() => setIsDark(prev => !prev)}>
        Toggle Theme
      </button>

      <button style={buttonStyle} onClick={() => setStatus(prev => (prev === 'online' ? 'offline' : 'online'))}>
        Toggle Status
      </button>
    </div>
  );
}

export default ChangeStyles;

