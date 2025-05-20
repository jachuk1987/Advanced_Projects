import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import PostCard from '../components/PostCard';
import { Post } from '../types/post';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: 'Hello World',
      content: 'This is the first blog post.',
      author: 'Admin',
      date: '2025-05-18',
    },
  ]);

  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Blog Posts</Typography>
      <Button variant="contained" onClick={() => navigate('/create')}>
        Create New Post
      </Button>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Home;
