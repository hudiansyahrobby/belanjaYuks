import { Router } from 'express';
import isValid from '../middlewares/isValid';
import authValidation from '../validations/auth.validation';
import { generateRefreshToken, login, register, logout } from '../controllers/auth.controller';
import { verifyAdmin, verifyUser } from '../middlewares/userAuth';

const router: Router = Router();

router.post('/login', isValid(authValidation.login, 'body'), login);

router.post('/signup', isValid(authValidation.signup, 'body'), register);

router.post('/logout', logout);

router.post('/refresh-token', generateRefreshToken);

router.get('/rahasia', verifyUser, verifyAdmin, (req: any, res: any) => {
    return res.status(200).json({ message: 'ahhaa' });
});

export default router;
