import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/Footer'
import MissingGradeForm from './components/Login/form';
import AuthenticationPage from './components/Login/Authentication';
import Home from './components/Home/Home';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
 <div className="App">
    <Router>
      <div className="app-container">
        <Navbar />
       <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<MissingGradeForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      
      <Footer /> {/* Include the Footer component */}
    </Router>
    </div>
  );
}

export default App;
