import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { Post } from '../types/post';

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>All Posts</Typography>
      {posts.length === 0 ? (
        <Typography>No posts yet.</Typography>
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                By {post.author} on {new Date(post.date).toLocaleString()}
              </Typography>
              <Typography sx={{ mt: 1 }}>{post.content}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Home;
