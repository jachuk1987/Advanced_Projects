import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4">Welcome to Job Search Platform</Typography>
    <Typography sx={{ mt: 2 }}>Find your dream job!</Typography>
  </Container>
);

export default Home;
