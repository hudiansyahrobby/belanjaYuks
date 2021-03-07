import User from '../models/user.model';

export const changeUserRole = (role: 'buyer' | 'admin' | 'seller', userId: string) => {
    return User.update(
        { role: role },
        {
            where: {
                id: userId,
            },
        },
    );
};
