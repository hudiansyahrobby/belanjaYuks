import { Router } from 'express';
import { verifyAdmin, verifyUser } from '../middlewares/userAuth';
import { create, update, remove, get } from '../controllers/category.controller';
import isValid from '../middlewares/isValid';
import CategoryValidation from '../validations/category.validation';

const router: Router = Router();

router.post('/categories', verifyUser, verifyAdmin, isValid(CategoryValidation.category, 'body'), create);

router.get('/categories', get);

router.put('/categories/:categoryId', verifyUser, verifyAdmin, isValid(CategoryValidation.category, 'body'), update);

router.delete('/categories/:categoryId', verifyUser, verifyAdmin, remove);

export default router;
