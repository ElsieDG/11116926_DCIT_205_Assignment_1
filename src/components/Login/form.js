import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="container">
      <div className="container mt-5">
        <h2 className="mb-4">Login</h2> 
          <form>
            <div className="mb-3">
              <label htmlFor="studentID" className="form-label">Student ID</label>
              <input type="text" className="form-control" id="studentName" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="course" />
            </div>
            <button className="btn btn-primary"  ><Link to="/Dashboard">Submit</Link></button>
          </form>
      </div>   
    </div>
  );
}

export default LoginForm;
