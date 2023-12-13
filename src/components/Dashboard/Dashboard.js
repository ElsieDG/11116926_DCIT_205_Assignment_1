// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Navbar from '../Navbar/navbar';

const Dashboard = () => {

  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
   
    <div className="main-body">
      <h1 className='heading'>Welcome to the Dashboard!</h1>

      {/* Accordion */}
      <div className={`accordion ${isAccordionOpen ? 'open' : ''}`}>
        <button className="accordion-toggle" onClick={toggleAccordion}>
          Toggle Accordion
        </button>
        <div className="accordion-content">
          {/* Add content for the accordion here */}
          <p>This is the content of the accordion.</p>
        </div>
      </div>
      
      <div className="tab-container">
        <Link to="/dashboard/tab1" className="tab-link">Tab 1</Link>
        <Link to="/dashboard/tab2" className="tab-link">Tab 2</Link>
        <Link to="/dashboard/tab3" className="tab-link">Tab 3</Link>
        <Link to="/dashboard/tab4" className="tab-link">Tab 4</Link>
        <Link to="/dashboard/tab5" className="tab-link">Tab 5</Link>
        <Link to="/dashboard/tab6" className="tab-link">Tab 6</Link>
        <Link to="/dashboard/tab7" className="tab-link">Tab 7</Link>
        <Link to="/dashboard/tab8" className="tab-link">Tab 8</Link>
      </div>
    </div>
  );
};

export default Dashboard;
