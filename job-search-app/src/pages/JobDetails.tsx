import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { Job } from '../types/job';

const dummyJobs: Job[] = [
  { id: '1', title: 'Frontend Developer', company: 'Tech Inc', location: 'Remote', description: 'Build UI using React and MUI.', type: 'Full-Time', salary: '$70,000' },
  { id: '2', title: 'Backend Engineer', company: 'DevWorks', location: 'New York', description: 'Build REST APIs using Node.js.', type: 'Contract', salary: '$80/hr' },
];

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const job = dummyJobs.find(j => j.id === id);

  if (!job) return <Typography variant="h6">Job not found</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">{job.title}</Typography>
      <Typography color="textSecondary">{job.company} - {job.location}</Typography>
      <Typography variant="body1" sx={{ my: 2 }}>{job.description}</Typography>
      <Typography variant="body2">Type: {job.type}</Typography>
      <Typography variant="body2">Salary: {job.salary}</Typography>
    </Container>
  );
};

export default JobDetails;
