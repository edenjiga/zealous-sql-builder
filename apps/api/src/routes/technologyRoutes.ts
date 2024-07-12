import { Router } from 'express';
import { getTechnologies } from '../controllers/technologyController';

const router = Router();

router.get('/', getTechnologies);

export default router;
