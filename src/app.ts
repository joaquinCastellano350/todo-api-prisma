import express from 'express';
import { userRouter } from './user/user.routes.js';
import {taskRouter} from './task/task.routes.js'
const app = express();
app.use(express.json())
app.use('/', userRouter);
app.use('/todos', taskRouter)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
});