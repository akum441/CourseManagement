import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const Form = ({ onSubmit }) => {

const [id, setCourseId] = useState('');
const [name, setCourseName] = useState('');
const [members, setCourseMembers] = useState([]);
const [coach_id, setCoachId] = useState('');
const [description, setDescription] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit({ id, name, members, coach_id, description });
};
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <div className="container mt-5 cMargin">
            <form>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="id"
                  value={id}
                  onChange={(e) => setCourseId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="members" className="form-label">Members</label>
                <input
                  type="text"
                  className="form-control"
                  id="members"
                  value={members}
                  onChange={(e) => {setCourseMembers(e.target.value.split(","))}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="coachId" className="form-label">Coach ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="coachId"
                  value={coach_id}
                  onChange={(e) => setCoachId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </form>

            <div className="modal-footer">
              <button type="submit" onClick={(e) => handleSubmit(e)}className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
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

export default Form;
