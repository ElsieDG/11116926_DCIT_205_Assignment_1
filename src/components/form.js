import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

const LoginForm = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student ID</label>
          <input type="text" className="form-control" id="studentName" />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Password</label>
          <input type="password" className="form-control" id="course" />
        </div>
    
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
