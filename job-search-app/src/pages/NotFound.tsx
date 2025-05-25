import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound: React.FC = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h4" color="error">404 - Page Not Found</Typography>
  </Container>
);

export default NotFound;
