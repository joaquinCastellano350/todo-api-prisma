import {Request, Response} from 'express';
import { TaskService } from './task.service.js';
import { AuthenticatedRequest } from '../middlewares/user.auth.middleware.js';

const taskService = new TaskService()

export class TaskController{
    async findAllTasks(req: Request, res: Response){
        try{
            const tasks = await taskService.findAllTasks()

            res.status(201).json({tasks})
        }catch(error){
            res.status(501).json({errorMessage: "Internal Error.", errorCode: "INTERNAL_ERROR"})
        }
    }

    async createTask(req: AuthenticatedRequest, res: Response){
        const userId = req.userId!
        const {title, description} = req.body
        try {
            const task = await taskService.createTask({title, description, userId})
            res.status(201).json({task})
        }catch(error){
            res.status(400).json({error})
        }
    }

    async editTask(req: AuthenticatedRequest, res: Response) {
        const taskId = req.params.id;
        const userId = req.userId!
        const {title, description} = req.body
        try{
            const task = await taskService.updateTask(taskId, {title,description,userId});

            res.status(201).json({task})
        }catch(error){
            res.status(400).json({error})
        }
    }
    async deleteTask(req: AuthenticatedRequest, res: Response) {
        const userId = req.userId!
        const taskId = req.params.id;
        try {
            await taskService.delete(taskId, userId)
            res.status(204)
        } catch(error){
            res.status(400).json({error})
        }
    }
}