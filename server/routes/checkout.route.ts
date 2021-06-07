import { Router } from 'express';
import { getCities, getProvinces, getShippingCost } from '../controllers/checkout.controller';

const router: Router = Router();

router.get('/provinces', getProvinces);

router.get('/provinces/:provinceId', getCities);

router.get('/checkout/cost', getShippingCost);

export default router;
