import { Router, json } from 'express';
import { login } from '../controllers/user.js';

const router = Router();

// prettier-ignore
router.post('/login',
  json(),
  login
);

export default router;
