import React, { useState, useEffect } from 'react';
import Prompt from './Prompt';
import { getCoursesAPI, deleteCourseAPI, updateCourseAPI, createCourseAPI } from '../apis/Crud';

function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [isEditing, setEditing] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // New
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [gotoPage, setGotoPage] = useState(1);

    useEffect(() => {
        getCoursesAPI().then(response => {
            setCourses(response.data["data"]);
        })
            .catch(error => {
                alert(`Fetch error: ${error.response.data.message}`);
            });
    }, []);

    const deleteCourse = (id) => {
        deleteCourseAPI({ data: { course_ids: [id] } }).then(() => {
            setCourses(courses.filter((course) => course.id !== id));
        }).catch(error => {
            alert(`Fetch error: ${error.response.data.message}`);
        });;
    };

    const updateCourse = (course) => {
        updateCourseAPI([course]).then(() => {
            setCourses(courses.map((item) => (item.id === course.id ? course : item)));
            setEditing(null);
        }).catch(error => {
            alert(`Fetch error: ${error.response.data.message}`);
        });;
    };

    const addCourse = (data) => {
        createCourseAPI([data]).then((response) => {
            document.location.href = "/";
        }).catch(error => {
            alert(`Fetch error: ${error.response.data.message}`);
        });;
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
        <div>
            <div className="container mt-5">
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#addCourseModal">
                    Add New Course
                </button>

                <Prompt addCourse={addCourse} />
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
                        {courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((course, index) => (
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
                                            value={Array.isArray(course.members) ? course.members.join(', ') : JSON.parse(course.members).join(', ')}
                                            className="fancy-input"
                                            onChange={(e) => handleInputChange(course.id, 'members', e.target.value.split(', '))}
                                        /> :
                                        Array.isArray(course.members) ? course.members.join(', ') : JSON.parse(course.members).join(', ')
                                    }
                                </td>
                                <td>
                                    {course.coach_id}
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
                                            (<button className="btn btn-success mr-2 confirm" onClick={() => {
                                                updateCourse(course);
                                                setEditing(null);
                                            }}>
                                                Confirm
                                            </button>) :
                                            (<button className="btn btn-danger mr-2 delete" onClick={() => deleteCourse(course.id)}>
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
            <div className="d-flex justify-content-center align-items-center">
                {/* Previous Button */}
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                    Previous
                </button>


                {/* Current Page Display */}
                <div className="mx-2">
                    {currentPage} of {Math.ceil(courses.length / itemsPerPage)} Pages
                </div>

                {/* Next Button */}
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(courses.length / itemsPerPage)))}>
                    Next
                </button>


                {/* Go to Page Input */}
                <div className="mx-2 goto">
                    <span>Go to Page:  </span>
                    <input
                        className='pageClass'
                        type="number"
                        value={gotoPage}
                        onChange={(e) => setGotoPage(Math.min(Math.max(1, e.target.value), Math.ceil(courses.length / itemsPerPage)))}
                    />
                    <button onClick={() => setCurrentPage(gotoPage)}>
                        Go
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
