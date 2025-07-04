import db from '../config/prisma.js';
export class UserRepository {
    async createUser(data) {
        const createdUser = await db.user.create({ data });
        return createdUser.id;
    }
    async findByEmail(email) {
        const user = await db.user.findUnique({ where: { email } });
        return user;
    }
}
//# sourceMappingURL=user.repository.js.map