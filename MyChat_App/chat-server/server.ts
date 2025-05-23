import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // frontend URL
    methods: ['GET', 'POST']
  }
});

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Chat server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join', (username: string) => {
    console.log(`${username} joined the chat`);
  });

  socket.on('chat message', (msg: string) => {
    console.log('Message:', msg);
    io.emit('chat message', msg); // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
