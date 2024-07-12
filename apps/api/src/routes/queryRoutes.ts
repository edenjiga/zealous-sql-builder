import { Router } from 'express';
import { queryUsers } from '../controllers/queryController';

const router = Router();

router.post('/', queryUsers);

export default router;
