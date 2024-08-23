import { Router } from 'express';

import {
  getAluguelByIdController,
  getAlugueisController,
  createAluguelController,
  updateAluguelController,
  deleteAluguelController
} from '../controllers/alugueis.controller.js';

import { validatePagination } from '../middlewares/validation.middleware.js';

const router = Router();

router.get('/',validatePagination, getAlugueisController);
router.get('/:id', getAluguelByIdController);
router.post('/', createAluguelController);
router.put('/:id', updateAluguelController);
router.delete('/:id', deleteAluguelController);

export default router;