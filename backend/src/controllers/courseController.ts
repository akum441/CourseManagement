import { getCourseLogic, createCourseLogic, updateCourseLogic, deleteCourseLogic } from '../services/courseService';

export const getCourse = async (req, res) => {
  const courses = await getCourseLogic();
  res.json(courses);
};

export const checkHealth=(req,res)=>{
    res.json({"Health":"OK"});
}

export const createCourse = async (req, res) => {
  const newCourse = await createCourseLogic(req.body);
  res.json(newCourse);
};

export const updateCourse = async (req, res) => {
  const updatedCourse = await updateCourseLogic(req.params.id, req.body);
  res.json(updatedCourse);
};

export const deleteCourse = async (req, res) => {
  await deleteCourseLogic(req.params.id);
  res.json({ message: 'Course deleted' });
};
