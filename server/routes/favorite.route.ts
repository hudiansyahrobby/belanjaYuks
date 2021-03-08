import { verifyUser } from '../middlewares/userAuth';

const { Router } = require('express');

const router = Router();

const { toggle, get } = require('../controllers/favorite.controller');

router.post('/favorites/:productId', verifyUser, toggle);

router.get('/favorites', verifyUser, get);

export default router;
