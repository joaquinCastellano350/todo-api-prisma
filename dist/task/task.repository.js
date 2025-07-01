import db from '../config/prisma.js';
export class TaskRepository {
    async update(id, data) {
        const task = await db.task.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description
            },
            select: {
                id: true,
                title: true,
                description: true
            }
        });
        return task;
    }
    async delete(taskId) {
        await db.task.delete({ where: { id: taskId } });
        return;
    }
    async create(data) {
        const task = await db.task.create({
            data: {
                title: data.title,
                description: data.description,
                authorId: data.userId
            },
            select: {
                id: true,
                title: true,
                description: true
            }
        });
        return task;
    }
    async findAll() {
        const tasks = await db.task.findMany();
        return tasks;
    }
    async findUserByTask(id) {
        const user = db.task.findUnique({
            where: { id },
        });
        return user;
    }
}
//# sourceMappingURL=task.repository.js.map