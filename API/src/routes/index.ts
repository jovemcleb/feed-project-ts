import { Router } from 'express';
import LoginRouter from './loginRouter';

const mainRouter = Router();

mainRouter.use('/login', (req, res, next) => LoginRouter(req, res, next));

export default mainRouter;
