import { Router } from 'express';
import { getPetsByTags, addPet } from '../controllers/pets';

const router = Router();

router.get('/:tags', getPetsByTags);

router.post('/', addPet)

export default router
