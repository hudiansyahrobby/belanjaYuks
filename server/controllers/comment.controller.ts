import { Response } from 'express';
import CommentType from '../interfaces/Comment';
import {
    createNewComment,
    getCommentsByProductId,
    isUserHaveCommented,
    getCommentById,
    updateCommentById,
    deleteCommentById,
} from '../services/comment.services';

export const createComment = async (req: any, res: Response) => {
    const user = req.user;
    const { productId } = req.params;

    const isHaveCommented = await isUserHaveCommented(user.id, productId);

    if (isHaveCommented) {
        return res.status(400).json({ message: 'You have commented on this product, update your comment instead' });
    }
    const newComment: Omit<CommentType, 'id'> = {
        ...req.body,
        userId: user.id,
        productId,
    };

    const comment = await createNewComment(newComment);

    return res.status(201).json({ message: 'Comment created successfully', comment });
};

export const getComments = async (req: any, res: Response) => {
    const { productId } = req.params;

    const comments = await getCommentsByProductId(productId);

    return res.status(201).json({ message: 'OK', comments });
};

export const getComment = async (req: any, res: Response) => {
    const { commentId } = req.params;

    const comment = await getCommentById(commentId);

    return res.status(201).json({ message: 'OK', comment });
};

export const updateComments = async (req: any, res: Response) => {
    const { commentId } = req.params;
    const user = req.user;

    const comment = await getCommentById(commentId);

    if (!comment) {
        return res.status(404).json({ message: `Comment with ${commentId} not found` });
    }

    if (comment.userId !== user.id) {
        return res.status(400).json({ message: 'Cannot update comment that is not yours' });
    }

    const updateComment: CommentType = {
        id: commentId,
        ...req.body,
    };

    const updatedComment = await updateCommentById(updateComment);

    return res.status(201).json({ message: 'Comment updated successfully', comment: updatedComment });
};

export const deleteComment = async (req: any, res: Response) => {
    const { commentId } = req.params;
    const user = req.user;

    const comment = await getCommentById(commentId);

    if (!comment) {
        return res.status(404).json({ message: `Comment with ${commentId} not found` });
    }

    if (comment.userId !== user.id) {
        return res.status(400).json({ message: 'Cannot delete comment that is not yours' });
    }

    await deleteCommentById(commentId);

    return res.status(201).json({ message: 'Comment deleted successfully', comment });
};
