import { Router } from 'express';

import {
  getVeiculoByIdController,
  getVeiculosController,
  createVeiculoController,
  updateVeiculoController,
  deleteVeiculoController
} from '../controllers/veiculos.controller.js';

const router = Router();

router.get('/', getVeiculosController);
router.get('/:id', getVeiculoByIdController);
router.post('/', createVeiculoController);
router.put('/:id', updateVeiculoController);
router.delete('/:id', deleteVeiculoController);

export default router;