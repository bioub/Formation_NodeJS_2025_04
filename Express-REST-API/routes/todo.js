import { Router, json } from 'express';

import authenticate from '../middlewares/authenticate.js';
import { list, show, add, delete as deleteCtrl, update } from '../controllers/todo.js';

const router = Router();

// prettier-ignore
router.get('/',
  list,
);

// prettier-ignore
router.get('/:id',
  show,
);

// prettier-ignore
router.post('/',
  // authenticate,
  json(),
  add
);

// prettier-ignore
router.delete('/:id',
  // authenticate,
  deleteCtrl,
);

// prettier-ignore
router.put('/:id',
  // authenticate,
  json(),
  update,
);

export default router;
