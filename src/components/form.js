import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

const MissingGradeForm = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Report Missing Grades</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input type="text" className="form-control" id="studentName" />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course</label>
          <input type="text" className="form-control" id="course" />
        </div>
        <div className="mb-3">
          <label htmlFor="missingGrade" className="form-label">Missing Grade</label>
          <input type="text" className="form-control" id="missingGrade" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeForm;
