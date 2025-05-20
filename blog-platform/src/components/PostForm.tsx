import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
} from '@mui/material';
import { Post } from '../types/post';

interface PostFormProps {
  initialValues?: Partial<Post>;
  onSubmit: (data: Omit<Post, 'id' | 'date'>) => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialValues = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [content, setContent] = useState(initialValues.content || '');
  const [author, setAuthor] = useState(initialValues.author || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, author });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Title"
        fullWidth
        required
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Content"
        fullWidth
        required
        multiline
        rows={6}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        label="Author"
        fullWidth
        required
        margin="normal"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default PostForm;
