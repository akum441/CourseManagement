import { getCourseLogic, createCourseLogic, updateCourseLogic, deleteCourseLogic } from '../services/courseService';

import {validateRequest,validateMembers} from "../utils/utilMethods";
import { Course } from '../models/Course';


export const checkHealth=(req,res)=>{
  res.json({"Health":"OK"});
}

export const getCourse = async (req, res) => {
  const courses = await getCourseLogic(req, res);
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const courses: Array<Course> = req.body;
  validateRequest(courses,res);
  validateMembers(courses,res);
  const newCourse = await createCourseLogic(courses,res);
  res.json(newCourse);
};

export const updateCourse = async (req, res) => {


  try {
    const courses: Array<Course> = req.body;
    if(courses["members"]) validateMembers(courses,res);
    const updatedCourse = await updateCourseLogic(req, res);
    res.status(200).json({ updatedCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }



};

export const deleteCourse = async (req, res) => {
  try {
    const message = await deleteCourseLogic(req, res);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
