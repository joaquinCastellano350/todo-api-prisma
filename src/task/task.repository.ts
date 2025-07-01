import db from '../config/prisma.js'


export class TaskRepository {
    async update(id: number, data: { title: any; description: any; userId: number; }) {
        const task = await db.task.update({
            where: {id},
            data: {
                title: data.title,
                description: data.description
            }
        })
    }
    async delete(taskId: number) {
        await db.task.delete({where: {id: taskId}});
    }
    async create( data: { title: string; description: string; userId: number; }) {
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
        })
        return task;
    }
    async findAll() {
        const tasks = await db.task.findMany();
        return tasks;
    }
}