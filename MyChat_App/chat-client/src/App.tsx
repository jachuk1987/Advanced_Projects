// src/App.tsx
import React, { useState } from 'react';
import Chat from './components/Chat';
import Join from './components/Join';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      {username ? <Chat username={username} /> : <Join onJoin={setUsername} />}
    </div>
  );
};

export default App;
