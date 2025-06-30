import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from './user.repository.js';
const userRepository = new UserRepository();
export class UserService {
    async register(data) {
        const exists = await userRepository.findByEmail(data.email);
        if (!exists) {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            try {
                const userId = await userRepository.createUser({ email: data.email, name: data.name, hashedPassword: hashedPassword });
                const token = jwt.sign({ userId }, 'PRIVATEST-KEY-EVER');
                return token;
            }
            catch (error) {
                console.error(error);
            }
        }
        throw new Error('That email is already registered.');
    }
    async login(email, password) {
        const user = await userRepository.findByEmail(email);
        if (!user)
            throw new Error('No user registered with that email.');
        const valid = await bcrypt.compare(password, user.hashedPassword);
        if (valid) {
            const userId = user.id;
            const token = jwt.sign({ userId }, 'PRIVATEST-KEY-EVER');
            return token;
        }
        throw new Error('Password is incorrect.');
    }
}
//# sourceMappingURL=user.service.js.map