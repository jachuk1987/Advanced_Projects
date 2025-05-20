import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add routes for /create, /post/:id, etc. */}
    </Routes>
  </Router>
);

export default App;
