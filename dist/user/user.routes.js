import { Router } from 'express';
import { UserController } from './user.controller.js';
export const userRouter = Router();
const userController = new UserController();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
//# sourceMappingURL=user.routes.js.map