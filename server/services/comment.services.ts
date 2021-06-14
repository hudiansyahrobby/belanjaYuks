import CommentType from '../interfaces/Comment';
import Comments from '../models/comment.model';
import User from '../models/user.model';

export const createNewComment = (newComments: Omit<CommentType, 'id'>) => {
    return Comments.create(newComments);
};

export const isUserHaveCommented = (userId: string, productId: string) => {
    return Comments.findOne({
        where: {
            productId,
            userId,
        },
    });
};

export const getCommentsByProductId = (productId: string) => {
    return Comments.findAll({
        where: {
            productId,
        },
        order: [['updatedAt', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
            },
        ],
    });
};

export const getCommentById = (id: string) => {
    return Comments.findOne({
        where: {
            id,
        },
    });
};

export const updateCommentById = async (comments: CommentType) => {
    const [_, updatedComment] = await Comments.update(comments, {
        where: {
            id: comments.id,
        },
        returning: true,
    });
    return updatedComment;
};

export const deleteCommentById = (commentId: string) => {
    return Comments.destroy({
        where: {
            id: commentId,
        },
    });
};
