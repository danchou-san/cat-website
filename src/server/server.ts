import express, { Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'catWebsite',
  password: 'postgres123',
  port: 5432,
});

const app = express();

app.use(cors());

app.get('/api/randomcat', async (req: Request, res: Response) => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return res
    .send(data);
});

app.get('/api/favorites', async (req: Request, res: Response) => {
  const query = 'SELECT * FROM public."User"';
  const data = await pool.query(query);
  const tableRow = data.rows[0].favorites;
  
  return res
    .send(tableRow);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
