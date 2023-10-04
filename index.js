import app from './src/app.js';
//import express from 'express'
import { connectDB } from './src/db.js';

connectDB();

//const app=express()
//export default app;
app.listen(4000)
console.log('Server on port',4000)
