import React, { useState } from 'react';
import Join from './components/Join';
import Chat from './components/Chat';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      {username ? <Chat username={username} /> : <Join onJoin={setUsername} />}
    </div>
  );
};

export default App;
