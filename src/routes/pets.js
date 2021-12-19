import { Router } from 'express';
import { getPets } from '../controllers/pets';

const router = Router();

router.get('/', getPets);
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`${id}`);
});

export default router;
