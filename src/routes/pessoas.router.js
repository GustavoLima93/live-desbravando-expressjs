import { Router } from 'express';

import {
  getPessoaByIdController,
  getPessoasController,
  createPessoaController,
  updatePessoaController,
  deletePessoaController
} from '../controllers/pessoas.controller.js';

const router = Router();

router.get('/', getPessoasController);
router.get('/:id', getPessoaByIdController);
router.post('/', createPessoaController);
router.put('/:id', updatePessoaController);
router.delete('/:id', deletePessoaController);

export default router;