import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

interface Props {
  onJoin: (username: string) => void;
}

const Join: React.FC<Props> = ({ onJoin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onJoin(username);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Join Chat
        </Button>
      </form>
    </Container>
  );
};

export default Join;
