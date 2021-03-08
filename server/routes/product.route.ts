import { Router } from 'express';
import { resizeImages, uploadImages } from '../controllers/image.controller';
import isValid from '../middlewares/isValid';
import { verifySeller, verifyUser } from '../middlewares/userAuth';
import ProductValidation from '../validations/product.validation';
import { create, getProducts, getDetail, update, remove } from '../controllers/product.controller';

const router: Router = Router();

router.post(
    '/products',
    verifyUser,
    verifySeller,
    uploadImages,
    resizeImages,
    isValid(ProductValidation.product, 'body'),
    create,
);

router.get('/products', getProducts);

router.get('/products/:productId', getDetail);

router.put(
    '/products/:productId',
    verifyUser,
    verifySeller,
    uploadImages,
    resizeImages,
    isValid(ProductValidation.product, 'body'),
    update,
);

router.delete('/products/:productId', verifyUser, verifySeller, remove);

export default router;
