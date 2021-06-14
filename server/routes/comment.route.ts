import { Router } from 'express';
import {
    createComment,
    deleteComment,
    getComment,
    getComments,
    updateComments,
} from '../controllers/comment.controller';
import isValid from '../middlewares/isValid';
import { verifyUser } from '../middlewares/userAuth';
import CommentValidation from '../validations/comment.validation';

const router: Router = Router();

router.post('/products/:productId/comments', verifyUser, isValid(CommentValidation.comment, 'body'), createComment);

router.get('/products/:productId/comments', getComments);

router.get('/products/:productId/comments/:commentId', getComment);

router.put(
    '/products/:productId/comments/:commentId',
    verifyUser,
    isValid(CommentValidation.comment, 'body'),
    updateComments,
);

router.delete('/products/:productId/comments/:commentId', verifyUser, deleteComment);

export default router;
