import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import schoolLogo from '../assets/university-of-ghana-logo-9A328D06E6-seeklogo.com.png'; // Import your school logo

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <img src={schoolLogo} alt="School Logo" className="logo" />
    </div>
    <div className="navbar-right">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);
};

export default Navbar;