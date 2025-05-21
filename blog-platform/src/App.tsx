import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import { Container } from '@mui/material';
import { Post } from './types/post';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/create" element={<CreatePost onCreate={addPost} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
