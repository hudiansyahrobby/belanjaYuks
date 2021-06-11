import { Router } from 'express';
import {
    getCities,
    getProvinces,
    getShippingCost,
    payProduct,
    getHistory,
    createHistory,
} from '../controllers/checkout.controller';
import { verifyUser } from '../middlewares/userAuth';

const router: Router = Router();

router.get('/provinces', getProvinces);

router.get('/provinces/:provinceId', getCities);

router.get('/checkout/cost', getShippingCost);

router.get('/checkout/history', verifyUser, getHistory);

router.post('/checkout/history', verifyUser, createHistory);

router.post('/checkout/pay', verifyUser, payProduct);

export default router;
