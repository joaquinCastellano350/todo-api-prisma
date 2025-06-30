import { User } from "./user.entity.js";
import { UserService } from "./user.service.js";
import {Request, Response} from 'express';
const userService = new UserService();

export class UserController {

    async register(req: Request, res: Response){
        const {name, email, password} = req.body;
        try {
            const token = await userService.register({name, email, password});
            res.status(201).json({token});
        }catch(error){
            console.error('errror',error);
            res.status(400).json({errorMessage: `Error registering the user: ${error}`, errorCode: 'USER_NOT_CREATED'})
        }
    }


    async login(req: Request, res: Response){
        const {email, password} = req.body;
        try {
            const token = await userService.login(email, password);
            res.status(201).json({token});
        }catch (error){
            res.status(400).json({errorMessage: `Error logging the user: ${error}`, errorCode: 'USER_NOT_LOGGED'});
        }
    }
}