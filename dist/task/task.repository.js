import db from '../config/prisma.js';
export class TaskRepository {
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
}
//# sourceMappingURL=task.repository.js.map