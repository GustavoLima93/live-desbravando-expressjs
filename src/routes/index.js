import { Router } from 'express';

import veiculosRouter from './veiculos.router.js';
import pessoasRouter from './pessoas.router.js';
import alugueisRouter from './alugueis.router.js';

const router = Router();

router.use('/veiculos', veiculosRouter);
router.use('/pessoas', pessoasRouter);
router.use('/alugueis', alugueisRouter);

export default router;