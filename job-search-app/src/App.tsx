import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <Navbar />
    <AppRoutes />
  </>
);

export default App;
