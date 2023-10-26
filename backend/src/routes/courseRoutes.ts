import express from 'express';
import { getCourse, createCourse, updateCourse, deleteCourse,checkHealth } from '../controllers/courseController';

const router = express.Router();

router.get('/health', checkHealth);
router.get('/getCourse', getCourse);
router.post('/createCourse', createCourse);
router.put('/updateCourse', updateCourse);
router.delete('/deleteCourse', deleteCourse);

export default router;
