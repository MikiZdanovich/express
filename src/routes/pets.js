import { Router } from 'express';
import { getPets } from '../controllers/pets';

const router = Router();

router.get('/:tags', getPets);

export default router;
