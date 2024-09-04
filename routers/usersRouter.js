import express from 'express';
import {getUser, createUser, login} from '../controllers/usersControllers.js'

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.post('/login', login);


export default router;