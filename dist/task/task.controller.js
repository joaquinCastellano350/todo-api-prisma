import { TaskService } from './task.service.js';
const taskService = new TaskService();
export class TaskController {
    async findAllTasks(req, res) {
        try {
            const tasks = taskService.findAllTasks();
            res.status(201).json({ tasks });
        }
        catch (error) {
            res.status(501).json({ errorMessage: "Internal Error.", errorCode: "INTERNAL_ERROR" });
        }
    }
    async createTask(req, res) {
        const userId = req.userId;
        const { title, description } = req.body;
        const task = await taskService.createTask({ title, description, userId });
        res.status(201).json({ task });
    }
}
//# sourceMappingURL=task.controller.js.map