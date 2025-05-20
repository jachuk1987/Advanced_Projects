import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Post } from '../types/post';

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body2" color="text.secondary">{post.author} - {post.date}</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>{post.content.slice(0, 100)}...</Typography>
    </CardContent>
  </Card>
);

export default PostCard;
