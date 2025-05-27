import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">EventBooking</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/adminLogin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
