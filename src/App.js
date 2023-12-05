import React from 'react';
import MissingGradeForm from './components/form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<MissingGradeForm />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
