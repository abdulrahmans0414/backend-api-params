import express from 'express';
import { User } from '../models/user.js';
import { getAllUsers, getUserDetails, register} from '../controllers/user.js';

const router = express.Router();

router.get('/api/users/all', getAllUsers );
    
router.post('/api/users/new', register);

// dynamically api 
router.get('/api/userid/:id', getUserDetails );    

export default router;