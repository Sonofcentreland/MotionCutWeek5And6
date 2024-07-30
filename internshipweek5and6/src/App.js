import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RatingReviews from './Pages/RatingReviews';
import Profile from './Pages/Profile';
import Navbar from './Pages/Navbar';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rating-reviews" element={<RatingReviews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
