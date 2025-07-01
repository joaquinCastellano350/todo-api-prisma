import {Request, Response} from 'express';
import { TaskService } from './task.service.js';
import { AuthenticatedRequest } from '../middlewares/user.auth.middleware.js';

const taskService = new TaskService()

export class TaskController{
    async findAllTasks(req: Request, res: Response){
        try{
            const tasks = taskService.findAllTasks()
            res.status(201).json({tasks})
        }catch(error){
            res.status(501).json({errorMessage: "Internal Error.", errorCode: "INTERNAL_ERROR"})
        }
    }

    async createTask(req: AuthenticatedRequest, res: Response){
        const userId = req.userId!
        const {title, description} = req.body
        const task = await taskService.createTask({title, description, userId})
        res.status(201).json({task})
    }
}