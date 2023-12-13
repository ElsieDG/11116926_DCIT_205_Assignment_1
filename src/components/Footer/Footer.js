// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='column'>
        <h3>SGSS</h3>
        <Link to='/Home'>Home</Link>
        <Link to='/form'>Login</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='#'>Notifications</Link>
      </div>
      <div className='column'>
        <h3>Grades</h3>
        <Link to='/Dashboard'>Dashboard</Link>
        <Link to='#'>Current Grades</Link>
        <Link to='#'>Missing Grades</Link>
        <Link to='#'>Grade Report</Link>
      </div>
      <div className='column'>
        <h3>Instructors</h3>
        <Link to='#'>My Instructor List</Link>
        <Link to='#'>Instructors Contact</Link>
        <Link to='#'>Send an Email</Link>
      </div>
      <div className='column'>
        <h3>Help</h3>
        <Link to='#'>FAQs</Link>
        <Link to='#'>Tutorial Videos</Link>
        <Link to='/contact'>Contact the Support Desk</Link>
      </div>
    </div>
  );
};

export default Footer;
