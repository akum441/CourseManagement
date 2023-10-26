import React from 'react';
import CarouselForm from './CarouselForm';

function AddCourseModal({ addCourse }) {
  const handleConfirm = () => {
    addCourse();
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
            {/* Your form or content here */}
           <CarouselForm/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourseModal;
