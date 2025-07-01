import jwt from 'jsonwebtoken';
export function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token not sent.' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'PRIVATEST-KEY-EVER');
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        res.status(401).json({ error: 'Invalid token.' });
        return;
    }
}
//# sourceMappingURL=user.auth.middleware.js.map