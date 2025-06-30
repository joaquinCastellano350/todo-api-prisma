import db from '../config/prisma.js'
interface CreateUserInput {
    name: string;
    email: string;
    hashedPassword: string;
}

export class UserRepository {
    async createUser(data : CreateUserInput) {
        const createdUser = await db.user.create({data});
        return createdUser.id;
    }
    async findByEmail(email: string) {
        const user = await db.user.findUnique({where: {email}})
        return user;
    }
}