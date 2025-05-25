import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Job } from '../types/Job';

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{job.title}</Typography>
      <Typography>{job.company} - {job.location}</Typography>
      <Typography color="text.secondary">{job.salary}</Typography>
      <Button component={Link} to={`/jobs/${job.id}`} sx={{ mt: 1 }}>
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default JobCard;
