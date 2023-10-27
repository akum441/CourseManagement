import { getCourseLogic, createCourseLogic, updateCourseLogic, deleteCourseLogic } from '../services/courseService';

import {validateRequest,validateMembers} from "../utils/utilMethods";
import { Course } from '../models/Course';


export const checkHealth=(req,res)=>{
  res.json({"Health":"OK"});
}

export const getCourse = async (req, res) => {
  try {
    const courses = await getCourseLogic(req, res);
    res.status(200).json({data:courses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  try {
    const courses: Array<Course> = req.body;
    validateRequest(courses);
    validateMembers(courses);
    const newCourse = await createCourseLogic(courses,res);
    res.status(200).json({data: newCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {

  try {
    const courses: Array<Course> = req.body;
    if(courses["members"]) validateMembers(courses);
    const updatedCourse = await updateCourseLogic(req, res);
    res.status(200).json({ data:updatedCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }



};

export const deleteCourse = async (req, res) => {
  try {
    const message = await deleteCourseLogic(req, res);
    res.status(200).json({ data:message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
