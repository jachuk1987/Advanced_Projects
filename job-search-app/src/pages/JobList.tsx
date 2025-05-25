import React from 'react';
import { Container, Typography } from '@mui/material';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';

const JobList: React.FC = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h5" gutterBottom>Available Jobs</Typography>
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </Container>
);

export default JobList;
