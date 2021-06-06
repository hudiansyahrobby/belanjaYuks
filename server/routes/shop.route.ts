import { resizeImages, uploadImages } from '../controllers/image.controller';
import isValid from '../middlewares/isValid';
import { verifyUser, verifySeller, verifyAdmin } from '../middlewares/userAuth';
import ShopValidation from '../validations/shop.validation';
import { Router } from 'express';
import {
    create,
    get,
    getDetail,
    update,
    getShopProduct,
    removeMyShop,
    removeShopById,
    getMyShopProduct,
    getMyShop,
} from '../controllers/shop.controller';

const router: Router = Router();

router.post('/shops', verifyUser, uploadImages, resizeImages, isValid(ShopValidation.shop, 'body'), create);

router.get('/shops', get);

router.get('/shops/products', verifyUser, verifySeller, getMyShopProduct);

router.get('/shops/products/:shopId', getShopProduct);

router.get('/shops/me', verifyUser, verifySeller, getMyShop);

router.get('/shops/:shopId', getDetail);

router.put(
    '/shops',
    verifyUser,
    verifySeller,
    uploadImages,
    resizeImages,
    isValid(ShopValidation.shop, 'body'),
    update,
);

router.delete('/shops', verifyUser, verifySeller, removeMyShop);

router.delete('/shops/:shopId', verifyUser, verifyAdmin, removeShopById);

export default router;
