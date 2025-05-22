import React, { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, Container, Typography } from '@mui/material';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

interface Props {
  username: string;
}

const Chat: React.FC<Props> = ({ username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket = io('http://localhost:4000');

    socket.emit('join', username);

    socket.on('chat message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [username]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = `${username}: ${message}`;
      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>Welcome, {username}</Typography>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>{msg}</ListItem>
        ))}
      </List>
      <form onSubmit={sendMessage}>
        <TextField
          fullWidth
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Chat;
