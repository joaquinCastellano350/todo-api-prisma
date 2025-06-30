import express from 'express';
import { userRouter } from './user/user.routes.js';
const app = express();
app.use(express.json());
app.use('/', userRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=app.js.map