import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import PostCard from '../components/PostCard';
import { Post } from '../types/post';

const Home: React.FC = () => {
  const [posts] = useState<Post[]>([
    { id: 1, title: "Hello World", content: "This is a blog post.", author: "Alice", date: "2025-05-18" }
  ]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Blog Posts</Typography>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Home;
