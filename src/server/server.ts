import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
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
app.use(bodyParser.json());

app.use(cors());

app.get('/api/searchcat/:breed/:type/:category', async (req: Request, res: Response) => {
  // const { breed, category, type, page } = req.body;
  const { breed, type, category } = req.params;
  // const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed=${breed}&category_ids=${category}&mime_types=${type}&page=${page}`);
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}`);
  const data = await response.json();

  return res
    .send(data);
});

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

app.post('/api/addfavorite', async (req: Request, res: Response) => {
  const { value } = req.body;
  
  const query = {
    text: 'UPDATE public."User" SET favorites = array_append(favorites, $1) WHERE id = 1',
    values: [value]
  }

  await pool.query(query);

  return res
    .send(value);
});

app.delete('/api/deletecat', async (req: Request, res: Response) => {
  const { value } = req.body;
  
  const query = {
    text: 'UPDATE public."User" SET favorites = array_remove(favorites, favorites[$1]) WHERE id = 1',
    values: [value]
  }

  await pool.query(query);

  return res
    .send(value);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
