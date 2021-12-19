import {Router} from 'express';
import {getPets} from '../controllers/pets.js';

const router = Router()


router.get('/pets', getPets)


export default router