import { Router } from 'express';
import LoginController from '../controllers/loginController';

const LoginRouter = Router();

const controller = new LoginController();

LoginRouter.post('/', controller.login);
LoginRouter.post('/register', controller.register);

export default LoginRouter;
