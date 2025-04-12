import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="p-6">
      <nav className="mb-4 flex gap-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/profile" className="text-blue-500">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
