import { Router } from 'express';
import { TaskController } from './task.controller.js';
import { authenticateJWT } from '../middlewares/user.auth.middleware.js';
export const taskRouter = Router();
const taskController = new TaskController();
taskRouter.post('/', authenticateJWT, taskController.createTask);
taskRouter.put('/:id', authenticateJWT, taskController.editTask);
taskRouter.delete('/:id', authenticateJWT, taskController.deleteTask);
taskRouter.get('/', taskController.findAllTasks);
//# sourceMappingURL=task.routes.js.map