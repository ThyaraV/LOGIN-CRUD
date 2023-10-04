import app from './src/app.js';
//import express from 'express'
import { connectDb } from './src/db.js';

await connectDb();

//const app=express()
//export default app;
app.listen(4000)
console.log('Server on port',4000)
