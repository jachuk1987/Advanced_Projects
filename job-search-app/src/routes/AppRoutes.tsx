import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import JobList from '../pages/JobList';
import JobDetails from '../pages/JobDetails';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jobs" element={<JobList />} />
    <Route path="/jobs/:id" element={<JobDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
