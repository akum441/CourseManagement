import { pool } from '../config/db';  // This assumes that your database setup is in a file called `db.js`
import { Course } from '../models/Course';


export const getCourseLogic = async () => {
  const [rows] = await pool.execute('SELECT * FROM courses');
  return rows;
};

export const createCourseLogic = async (course: Course): Promise<any> => {
    try {
      const [result] = await pool.execute('INSERT INTO courses SET ?', [course]);
      return result; // Now 'result' can be of any type
    } catch (error) {
      throw new Error(`Could not insert course: ${error.message}`);
    }
  };
  
export const updateCourseLogic = async (id, course) => {
  await pool.execute('UPDATE courses SET ? WHERE id = ?', [course, id]);
  return { id, ...course };
};

export const deleteCourseLogic = async (id) => {
  await pool.execute('DELETE FROM courses WHERE id = ?', [id]);
};
