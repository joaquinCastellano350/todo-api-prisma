import { TaskRepository } from "./task.repository.js";
const taskRepository = new TaskRepository();
export class TaskService {
    async createTask(data) {
        if (data.title == '' || data.description == '') {
            throw new Error('Bad Request.');
        }
        try {
            const task = taskRepository.create(data);
            return task;
        }
        catch (error) {
            return error;
        }
    }
    async findAllTasks() {
        return await taskRepository.findAll();
    }
}
//# sourceMappingURL=task.service.js.map