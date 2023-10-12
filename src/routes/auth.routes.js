import {Router} from 'express';
import {login,register,logout,profile,verifyToken} from "../controllers/auth.controller.js";
import { authRequired } from '../Middlewares/validateToken.js';
import { validateSchema } from '../Middlewares/validator.middleware.js';
import { registerSchema,loginSchema } from '../Schemas/auth.schema.js';

const router =Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',verifyToken);
router.get('/verify',authRequired,profile);


//agregar a express 
export default router