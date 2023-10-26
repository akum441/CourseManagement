import { pool } from '../config/db';
import { Course } from '../models/Course';
import { columns } from '../utils/values';


export async function getCourseLogic(req, res) {
  const connection = await pool.getConnection();
  const courseId = req.query.id; 
  let query = 'SELECT * FROM courses';
  let params = [];

  try {
    await connection.beginTransaction();

    if (courseId) {
      query += ' WHERE id = ?';
      params.push(courseId);
    }

    const [rows] = await connection.execute(query, params);

    if (courseId) {
      if (rows) {
        res.status(200).send(rows[0]);
      } else {
        res.status(404).send("Course not found");
      }
    } else {
      res.status(200).send(rows);
    }

    await connection.commit();
  } catch (err) {
    await connection.rollback();
    res.status(500).send("Internal Server Error");
  } finally {
    connection.release();
  }
}

export async function createCourseLogic(courses: Array<Course>, res) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const values = courses.map(course => [
      course.id,
      course.name,
      JSON.stringify(course.members),
      course.coach_id,
      course.description
    ]).flat();

    const placeholders = courses.map(() => "(?, ?, ?, ?, ?)").join(", ");
    const query = `INSERT INTO courses (id, name, members, coach_id, description) VALUES ${placeholders}`;

    await connection.query(query, values);

    await connection.commit();
    res.status(201).send({"message":"Courses created"});
  } catch (err) {
    await connection.rollback();
    res.status(500).send("Internal Server Error");
  } finally {
    connection.release();
  }
}

export const updateCourseLogic = async (req, res) => {
  const courses = req.body; 
  const connection = await pool.getConnection();

  if (!Array.isArray(courses) || courses.length === 0) {
    res.status(400).send("No courses provided");
    return;
  }

  try {
    await connection.beginTransaction();

    for (const course of courses) {
      if (!course.id) {
        throw new Error("Course ID is missing");
      }

      let updateParts = [];
      let values = [];

      for (const col of columns) {
        if (course.hasOwnProperty(col)) {
          updateParts.push(`${col} = ?`);
          values.push(course[col]);
        }
      }

      if (updateParts.length === 0) continue;

      const query = `UPDATE courses SET ${updateParts.join(", ")} WHERE id = ?`;

      // Add the ID for the WHERE clause
      values.push(course.id);

      await connection.execute(query, values);
    }

    await connection.commit();
    res.status(200).send("Courses updated");
  } catch (err) {
    await connection.rollback();
    console.error(err);
    res.status(500).send("Internal Server Error");
  } finally {
    connection.release();
  }
};


export async function deleteCourseLogic(req, res) {
  const courseIds = req.body.course_ids;
  const connection = await pool.getConnection();
  
  if (!Array.isArray(courseIds) || courseIds.length === 0) {
    throw new Error("No courseIds provided");
  }

  try {
    await connection.beginTransaction();

    const placeholders = courseIds.map(() => '?').join(', ');
    const query = `DELETE FROM courses WHERE id IN (${placeholders})`;

    await connection.query(query, courseIds);
    await connection.commit();
    return "Courses deleted";
  } catch (err) {
    await connection.rollback();
    throw new Error(err);
  } finally {
    connection.release();
  }
}
