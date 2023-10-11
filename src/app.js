//import app from './index.js'
import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from 'cors';


const app=express();

app.use(cors({
    origin:'http://localhost:5173',
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',taskRoutes);

export default app;
//app.listen(3000)
//console.log('Server on port',3000)