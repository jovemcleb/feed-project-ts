import express, { Request, Response } from 'express';

const app = express();

app.get('/ola', (_req: Request, res: Response) => {
  return res.json({ message: 'Olá, estou aqui, ou não' });
});

const PORT = 3001;

app.listen(3001, () => console.log(`Server running on port: ${PORT}`));