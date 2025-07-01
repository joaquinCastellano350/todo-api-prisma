import {Router} from 'express';
import { TaskController } from './task.controller.js';
import { authenticateJWT } from '../middlewares/user.auth.middleware.js';
export const taskRouter = Router()

const taskController = new TaskController();

taskRouter.post('/',authenticateJWT, taskController.createTask)
taskRouter.put('/:id', (req,res) => {res.status(201).json({message: "not done yet"})})
taskRouter.delete('/:id', (req,res) => {res.status(201).json({message: "not done yet"})})
taskRouter.get('/', taskController.findAllTasks)