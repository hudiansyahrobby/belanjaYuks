import { verifyUser } from '../middlewares/userAuth';
import { Router } from 'express';
import { toggle, get } from '../controllers/favorite.controller';

const router: Router = Router();

router.post('/favorites/:productId', verifyUser, toggle);

router.get('/favorites', verifyUser, get);

export default router;
