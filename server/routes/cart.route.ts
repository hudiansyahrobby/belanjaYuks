import { verifyUser } from '../middlewares/userAuth';

import { Router } from 'express';

import { create, get, update, remove } from '../controllers/cart.controller';

const router: Router = Router();

router.post('/carts/:productId', verifyUser, create);

router.get('/carts', verifyUser, get);

router.put('/carts/:productId', verifyUser, update);

router.delete('/carts/:productId', verifyUser, remove);

export default router;
