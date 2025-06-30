import { UserService } from "./user.service.js";
const userService = new UserService();
export class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            const token = await userService.register({ name, email, password });
            res.status(201).json({ token });
        }
        catch (error) {
            console.error('errror', error);
            res.status(400).json({ errorMessage: `Error registering the user: ${error}`, errorCode: 'USER_NOT_CREATED' });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const token = await userService.login(email, password);
            res.status(201).json({ token });
        }
        catch (error) {
            res.status(400).json({ errorMessage: `Error logging the user: ${error}`, errorCode: 'USER_NOT_LOGGED' });
        }
    }
}
//# sourceMappingURL=user.controller.js.map