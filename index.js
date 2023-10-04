import express from 'express'
import { connectDB } from './src/db.js'

connectDB();

const app=express()

//export default app;
app.listen(3000)
console.log('Server on port',3000)
