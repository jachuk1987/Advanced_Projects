import React from 'react';
import { Container, Typography } from '@mui/material';
import PostForm from '../components/PostForm';
import { Post } from '../types/post';
import { useNavigate } from 'react-router-dom';

interface Props {
  onCreate: (post: Post) => void;
}

const CreatePost: React.FC<Props> = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleCreate = (data: Omit<Post, 'id' | 'date'>) => {
    const newPost: Post = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString(),
    };

    onCreate(newPost);
    navigate('/'); // Redirect to Home page
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
