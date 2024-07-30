import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">TIFFIN CENTER</Link>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to="/menu" className="navbar-link">Menu</Link></li>
          <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
          <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
          <li className="navbar-item dropdown">
            <Link to="/rating-reviews" className="navbar-link">Rate & Review</Link>
            <ul className="dropdown-menu">
              <li><Link to="/rating-reviews" className="dropdown-link">Submit Review</Link></li>
              <li><Link to="/rating-reviews" className="dropdown-link">View Reviews</Link></li>
            </ul>
          </li>
          <li className="navbar-item"><Link to="/profile" className="navbar-link">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
