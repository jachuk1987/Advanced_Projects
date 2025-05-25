import React from 'react';
import { Container, Typography } from '@mui/material';
import JobCard from '../components/JobCard';
import { Job } from '../types/job';

const dummyJobs: Job[] = [
  { id: '1', title: 'Frontend Developer', company: 'Tech Inc', location: 'Remote', description: 'Job details...', type: 'Full-Time', salary: '$70,000' },
  { id: '2', title: 'Backend Engineer', company: 'DevWorks', location: 'New York', description: 'Job details...', type: 'Contract', salary: '$80/hr' },
];

const JobList: React.FC = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h5" gutterBottom>Available Jobs</Typography>
    {dummyJobs.map(job => <JobCard key={job.id} job={job} />)}
  </Container>
);

export default JobList;
