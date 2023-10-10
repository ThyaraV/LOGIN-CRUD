import { Router } from "express";
import {authRequired} from "../Middlewares/validateToken.js";
import { getTask,getTasks,createTasks,updateTasks,deleteTasks } from "../controllers/tasks.controller.js";

const router=Router();

router.get('/tasks',authRequired,getTasks);
router.get('/tasks/:id',authRequired,getTask);
router.post('/tasks',authRequired,createTasks);
router.delete('/tasks/:id',authRequired,deleteTasks);
router.put('/tasks/:id',authRequired,updateTasks);




export default router