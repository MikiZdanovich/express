import { Router } from 'express';
import pets from './pets';

const router = Router();

router.use('/pets', pets);

export default router;
