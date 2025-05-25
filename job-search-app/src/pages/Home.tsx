import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h4" gutterBottom>Welcome to JobSearch</Typography>
    <Typography variant="body1" gutterBottom>Find your dream job today!</Typography>
    <Button component={Link} to="/jobs" variant="contained">Browse Jobs</Button>
  </Container>
);

export default Home;
