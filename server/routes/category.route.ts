import { Router } from 'express';
import { verifyAdmin, verifyUser } from '../middlewares/userAuth';
import { create, update, remove, get } from '../controllers/category.controller';

const router: Router = Router();

router.post('/categories', verifyUser, verifyAdmin, create);

router.get('/categories', get);

router.put('/categories/:categoryId', verifyUser, verifyAdmin, update);

router.delete('/categories/:categoryId', verifyUser, verifyAdmin, remove);

export default router;
