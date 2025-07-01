import { TaskRepository } from "./task.repository.js";

const taskRepository = new TaskRepository()
export class TaskService {
    async delete(taskId: string) {
        await taskRepository.delete(parseInt(taskId));
        return;
    }
    async updateTask(taskId: any, data: { title: any; description: any; userId: number; }) {

        const id = parseInt(taskId);
        const task = await taskRepository.update(id,data);
    }
    async createTask(data: { title: string; description: string; userId: number; }) {
        
        if(data.title == '' || data.description == ''){
            throw new Error('Bad Request.');
        }
        
        try {
            const task = taskRepository.create(data);
            return task;
        }catch(error){
            return error
        }
    }
    async findAllTasks() {
        return await taskRepository.findAll();
    }
}