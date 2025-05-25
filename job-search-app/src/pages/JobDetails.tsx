import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { jobs } from '../data/jobs';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find(j => j.id === Number(id));

  if (!job) return <Typography>Job not found</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{job.title}</Typography>
      <Typography variant="h6">{job.company}</Typography>
      <Typography>{job.location}</Typography>
      <Typography color="text.secondary">{job.salary}</Typography>
      <Typography sx={{ mt: 2 }}>{job.description}</Typography>
    </Container>
  );
};

export default JobDetails;
