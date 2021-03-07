import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Shop from '../models/shop.model';
import User from '../models/user.model';

export const verifyUser = async function (req: any, res: Response, next: NextFunction) {
    if (req.headers.authorization) {
        const bearerToken: string[] = req.headers.authorization.split(' ');
        let accessToken: string = bearerToken[1];
        if (!accessToken) {
            return res.status(401).json({ message: 'Unauthorized, Access Denied' });
        }

        try {
            const decodedToken: any = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string);
            const user = await User.findOne({
                where: { id: decodedToken.id },
                attributes: {
                    exclude: ['password', 'refreshToken', 'resetPasswordToken', 'resetTokenExpired', 'resetToken'],
                },
                include: [
                    {
                        model: Shop,
                    },
                ],
            });
            req.user = user;
            next();
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Session timed out,please login again' });
            } else if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: 'Invalid token,please login again!' });
            } else {
                //catch other unprecedented errors
                return res.status(400).json({ message: error });
            }
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized, Access Denied' });
    }
};

export const verifySeller = (req: any, res: Response, next: NextFunction) => {
    const isSeller = req?.user?.role === 'seller';
    try {
        if (isSeller) {
            return next();
        }
        return res.status(400).json({ message: "You're not seller, access denied" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const verifyAdmin = (req: any, res: Response, next: NextFunction) => {
    const isAdmin = req?.user?.role === 'admin';
    try {
        if (isAdmin) {
            return next();
        }
        return res.status(400).json({ message: "You're not admin, access denied" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
