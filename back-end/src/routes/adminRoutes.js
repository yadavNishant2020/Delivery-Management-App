import express from 'express';
import { adminSignUp, adminSignIn } from '../controllers/adminController.js';

const router = express.Router();

router.post('/signup', adminSignUp);
router.post('/signin', adminSignIn);

export default router;
