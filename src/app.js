//import app from './index.js'
import express from 'express';

import authRoutes from "./routes/auth.routes.js";

const app=express();

app.use(express.json());
app.use('/api',authRoutes);

export default app;
//app.listen(3000)
//console.log('Server on port',3000)