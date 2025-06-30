import {Request, Response} from 'express';
import { TaskService } from './task.service';

const taskService = new TaskService()

export class taskController{
    async findAllTasks(req: Request, res: Response){
        const tasks = taskService.findAllTasks()
        res.status(201).json({tasks})
    }

    async createTask(req: Request, res: Response){
        
    }
}