import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselForm = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container mt-5">
            <form>
              <div className="mb-3">
                <label htmlFor="courseId" className="form-label">ID</label>
                <input type="number" className="form-control" id="courseId" />
              </div>
              <div className="mb-3">
                <label htmlFor="courseName" className="form-label">Name</label>
                <input type="text" className="form-control" id="courseName" />
              </div>
              <div className="mb-3">
                <label htmlFor="courseMembers" className="form-label">Members</label>
                <input type="text" className="form-control" id="courseMembers" />
              </div>
              <div className="mb-3">
                <label htmlFor="coachId" className="form-label">Coach ID</label>
                <input type="text" className="form-control" id="coachId" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        {/* Add more carousel-items here */}
      </div>
      {/* Carousel controls (optional) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselForm;
