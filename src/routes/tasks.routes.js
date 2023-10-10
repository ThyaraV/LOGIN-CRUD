import { Router } from "express";
import {authRequired} from "../Middlewares/validateToken.js";

const router=Router();
router.get('/tasks',authRequired,(req,res)=>res.send('tasks'))

export default router