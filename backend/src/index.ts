import express from 'express';
import { pool } from './config/db';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT 1 + 1 AS solution');
    connection.release();
    res.send(`Hello World! Solution is ${rows[0].solution}`);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
