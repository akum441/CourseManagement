import React from 'react';
import Form from './utilComponents/Form';

function Prompt({ addCourse }) {
  const handleSubmit = (data) => {
    addCourse(data);
  };

  return (
    <div className="modal fade" id="addCourseModal" tabIndex="-1" aria-labelledby="addCourseModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addCourseModalLabel">Add New Course</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
           <Form onSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prompt;
