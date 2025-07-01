import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
    userId?: number
}

export function authenticateJWT(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({error: 'Token not sent.'})
        return
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'PRIVATEST-KEY-EVER') as {userId: number}
        req.userId = decoded.userId;
        next();
    }catch (err) {
        res.status(401).json({error: 'Invalid token.'});
        return
    }
}