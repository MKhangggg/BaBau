import express from 'express';
import cors from 'cors';
import taskRouters from './routes/taskRouters.js'

const app = express();
app.use(cors());

app.use("/api/tasks",taskRouters)

app.listen(5001, () => {
    console.log('Server đang chạy trên công 5001');
});
