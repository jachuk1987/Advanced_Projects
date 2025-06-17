import React, { useState } from 'react';
import './ChangeStyles.css'; // Assuming you're using CSS classes

function ChangeStyles() {
  const [isDark, setIsDark] = useState(false);
  const [status, setStatus] = useState('online');

  return (
    <div style={{ padding: '20px' }}>
      {/* 1. Inline Style */}
      <h2 style={{ color: isDark ? 'white' : 'black', backgroundColor: isDark ? '#333' : '#eee' }}>
        Theme is {isDark ? 'Dark' : 'Light'}
      </h2>

      {/* 2. Conditional ClassName */}
      <p className={status === 'online' ? 'online-text' : 'offline-text'}>
        Status: {status}
      </p>

      {/* 3. Template Literal for ClassName */}
      <div className={`box ${isDark ? 'dark-box' : 'light-box'}`}>
        This box changes background
      </div>

      <br />

      {/* Toggle buttons */}
      <button onClick={() => setIsDark(prev => !prev)}>
        Toggle Theme
      </button>
      <button onClick={() => setStatus(prev => (prev === 'online' ? 'offline' : 'online'))}>
        Toggle Status
      </button>
    </div>
  );
}

export default ChangeStyles;
