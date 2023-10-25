import express from 'express';
import { getCourse, createCourse, updateCourse, deleteCourse,checkHealth } from '../controllers/courseController';

const router = express.Router();

router.get('/', getCourse);
router.get('/health', checkHealth);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
