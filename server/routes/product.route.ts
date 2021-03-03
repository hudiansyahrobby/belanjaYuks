import { resizeImages, uploadImages } from '../controllers/image.controller';
import { verifyAdmin, verifyUser } from '../middlewares/userAuth';

const { Router } = require('express');

const router = Router();

const { create, get, getDetail, update, remove } = require('../controllers/product.controller');

router.post('/products', verifyUser, verifyAdmin, uploadImages, resizeImages, create);

router.get('/products', get);

router.get('/products/:id', getDetail);

router.put('/products/:id', verifyUser, verifyAdmin, uploadImages, resizeImages, update);

router.delete('/products/:id', verifyUser, verifyAdmin, uploadImages, resizeImages, remove);

module.exports = router;
