import {Router} from 'express';
import {login,register,logout,profile} from "../controllers/auth.controller.js";
import { authRequired } from '../Middlewares/validateToken.js';


const router =Router();

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/profile',authRequired,profile);

//agregar a express 
export default router