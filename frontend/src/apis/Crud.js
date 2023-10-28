import { getCourse, createCourse, updateCourse, deleteCourse } from '../constant/Url';

import axios from 'axios';
import { getBaseUrl } from '../utils/MethodUtils';

export const getCoursesAPI = () => {
    let url = getBaseUrl() + getCourse;
    return axios.get(url);
};

export const updateCourseAPI = (course) => {
    let url = getBaseUrl() + updateCourse;
    return axios.put(url, course);
};

export const createCourseAPI = (course) => {
    let url = getBaseUrl() + createCourse;
    return axios.post(url, course)
};

export const deleteCourseAPI = (course) => {
    let url = getBaseUrl() + deleteCourse;
    return axios.delete(url, course)
};