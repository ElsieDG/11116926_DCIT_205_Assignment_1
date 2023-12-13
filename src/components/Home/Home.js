import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {

  return (
    <div className='main-body home'>
      <h1 className='home-heading'>Welcome to Student Grade System Services </h1><br></br>
      <ul className='login-links'>
        <li className='login-links b'><Link to="/form">Login</Link></li>
        <li className='login-links b'><Link to="/contact">Contact the Support Desk</Link></li>
        <li className='login-links b'><Link to="/about">FAQs</Link></li>
      </ul> 
      

      <div className='overview'>
        <div className='banner'>
          <h2>OVERVIEW</h2>
        </div>
          <p>Use our missing grade system to report unrecorded grades</p>
          <p>View current and past semester's course grades</p>
          <p>Find or contact your instructors</p>
          <p>Get help on all your Academic record related issues</p>
      </div>
      
    </div>

  
  );
};

export default Home;
