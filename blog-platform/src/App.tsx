import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
