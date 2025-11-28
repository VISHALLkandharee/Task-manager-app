import {Router} from 'express';
import { getProfile, RegisterUser } from '../controllers/register.controller.js';
import { loginUser, logoutUser, updateUser } from '../controllers/register.controller.js';

// middleware for secure routes
import verifyJwt from '../middlewares/PrivateAuthorization.js';
import upload from '../middlewares/multerMiddleware.js'

const router = Router();

// Example route for user register
router.post('/register',upload.single('avatar'), RegisterUser)
router.post('/login', loginUser)
router.get('/logout', verifyJwt, logoutUser)

router.get('/profile', verifyJwt, getProfile)
router.patch('/update-profile', verifyJwt, updateUser)


export default router;
