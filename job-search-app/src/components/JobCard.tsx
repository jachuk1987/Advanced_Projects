import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Job } from '../types/job';

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{job.title}</Typography>
      <Typography color="textSecondary">{job.company} - {job.location}</Typography>
      <Typography variant="body2" sx={{ my: 1 }}>{job.type}</Typography>
      <Button component={Link} to={`/jobs/${job.id}`} variant="contained">View Details</Button>
    </CardContent>
  </Card>
);

export default JobCard;
