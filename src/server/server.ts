import express, { Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

app.get('/api/randomcat', async (req: Request, res: Response) => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return res
    .send(data);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
