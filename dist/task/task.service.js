import { TaskRepository } from "./task.repository.js";
const taskRepository = new TaskRepository();
export class TaskService {
    async delete(taskId, userId) {
        const taskUserId = await taskRepository.findUserByTask(parseInt(taskId));
        if (!taskUserId)
            throw new Error('Task not found.');
        if (taskUserId.authorId == userId) {
            try {
                await taskRepository.delete(parseInt(taskId));
                return;
            }
            catch (error) {
                return error;
            }
        }
        throw new Error('No authorization to delete the post.');
    }
    async updateTask(taskId, data) {
        const taskUserId = await taskRepository.findUserByTask(parseInt(taskId));
        if (!taskUserId)
            throw new Error('Task not found.');
        if (taskUserId.authorId == data.userId) {
            const tid = parseInt(taskId);
            try {
                const task = await taskRepository.update(tid, data);
                return task;
            }
            catch (error) {
                return error;
            }
        }
        throw new Error('No authorization to update the post.');
    }
    async createTask(data) {
        if (data.title == '' || data.description == '') {
            throw new Error('Bad Request.');
        }
        try {
            const task = await taskRepository.create(data);
            return task;
        }
        catch (error) {
            return error;
        }
    }
    async findAllTasks() {
        const tasks = await taskRepository.findAll();
        return tasks;
    }
}
//# sourceMappingURL=task.service.js.map