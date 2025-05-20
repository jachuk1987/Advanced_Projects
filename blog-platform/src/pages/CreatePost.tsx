import React from 'react';
import { Container, Typography } from '@mui/material';
import PostForm from '../components/PostForm';
import { Post } from '../types/post';

const CreatePost: React.FC = () => {
  const handleCreate = (data: Omit<Post, 'id' | 'date'>) => {
    const newPost: Post = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString(),
    };

    // Later: Save to backend or global state
    console.log('New Post Created:', newPost);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <PostForm onSubmit={handleCreate} />
    </Container>
  );
};

export default CreatePost;
