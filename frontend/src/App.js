import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);
  const [isEditing, setEditing] = useState(null);
  const [newCourse, setNewCourse] = useState({});
  const [editCourse, setEditCourse] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/getCourse')
      .then(response => {
        setCourses(response.data["data"]);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      });
  }, []);

  const deleteCourse = (id) => {
    axios.delete(`http://localhost:3000/api/deleteCourse`, { data: { course_ids: [id] } }).then(() => {
      setCourses(courses.filter((course) => course.id !== id));
    });
  };

  const updateCourse = (course) => {
    axios.put('http://localhost:3000/api/updateCourse', [course]).then(() => {
      setCourses(courses.map((item) => (item.id === course.id ? course : item)));
      setEditing(null);
    });
  };

  const addCourse = () => {
    axios.post('http://localhost:3000/api/createCourse', [newCourse]).then((response) => {
      setCourses([...courses, response.data]);
      setNewCourse({});
    });
  };


  useEffect(() => {
    axios.get('http://localhost:3000/api/getCourse')
      .then(response => {
        setCourses(response.data["data"]);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      });
  }, []);

  const startEditing = (id, course) => {
    setEditing(id);
    setEditCourse(course);
  };

  const handleInputChange = (id, key, value) => {
    setCourses(prevCourses => {
      return prevCourses.map(course => {
        if (course.id === id) {
          return { ...course, [key]: value };
        }
        return course;
      });
    });
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={() => addCourse()}>
        Add New Course
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Members</th>
            <th>Coach ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.id}</td> {/* ID is not editable */}
              <td>
                {isEditing === course.id ?
                  <input
                    value={course.name}
                    className="fancy-input"
                    onChange={(e) => handleInputChange(course.id, 'name', e.target.value)}
                  /> :
                  course.name}
              </td>
              <td>
                {isEditing === course.id ?
                  <input
                    value={Array.isArray(course.members) ? course.members.join(', ') : ''}
                    className="fancy-input"
                    onChange={(e) => handleInputChange(course.id, 'members', e.target.value.split(', '))}
                  /> :
                  Array.isArray(course.members) ? course.members.join(', ') : ''}
              </td>
              <td>
                {isEditing === course.id ?
                  <input
                    value={course.coach_id}
                    className="fancy-input"
                    onChange={(e) => handleInputChange(course.id, 'coach_id', e.target.value)}
                  /> :
                  course.coach_id}
              </td>
              <td>
                {isEditing === course.id ?
                  <input
                    value={course.description}
                    className="fancy-input"
                    onChange={(e) => handleInputChange(course.id, 'description', e.target.value)}
                  /> :
                  course.description}
              </td>
              <td>
                <div className="d-flex">
                  {isEditing === course.id ?
                    (<button className="btn btn-success mr-2" onClick={() => {
                      updateCourse(course);
                      setEditing(null);
                    }}>
                      Confirm
                    </button>) :
                    (<button className="btn btn-danger mr-2" onClick={() => deleteCourse(course.id)}>
                      Delete
                    </button>)}
                  <button className="btn btn-info" onClick={() => setEditing(prev => prev === course.id ? null : course.id)}>
                    {isEditing === course.id ? 'Cancel' : 'Edit'}
                  </button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;
