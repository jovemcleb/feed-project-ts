import express, { Request, Response } from 'express';
import mainRouter from './routes';
import Post from './services/postService';

const app = express();

app.use(express.json());

app.get('/ola', async (_req: Request, res: Response) => {
  const allPosts = await Post.getAllPosts();

  return res.json(allPosts);
});

app.use(mainRouter);

const PORT = 3001;

app.listen(3001, () => console.log(`Server running on port: ${PORT}`));