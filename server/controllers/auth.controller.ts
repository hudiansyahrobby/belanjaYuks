import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import getToken from '../helpers/getToken';
import hashPassword from '../helpers/hashPassword';

export const register = async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({ message: 'This is email has been registered' });
        }

        const hashedPassword: string = await hashPassword(password);

        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        // Create new user if not exist in DB
        const _newUser = await User.create(newUser);

        const userData: any = _newUser.toJSON();
        delete userData.password;
        delete userData.refreshToken;
        delete userData.resetToken;

        return res.status(201).json({ message: 'User successfully registered', user: userData });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email,
            },
            raw: true,
        });

        if (!user) {
            return res.status(400).json({ message: 'Email or Password is not valid' });
        }

        const passwordMatch: boolean = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Email or Password is not valid' });
        }

        const payload = { id: user.id };
        const accessToken = getToken(payload, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_LIFE);

        const refreshToken = getToken(payload, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_LIFE);

        res.cookie('jwt', refreshToken, { httpOnly: true });

        return res.status(200).json({ accessToken });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const generateRefreshToken = async (req: Request, res: Response): Promise<Response> => {
    try {
        //get refreshToken
        const { jwt: refreshToken } = req.cookies;
        //send error if no refreshToken is sent
        if (!refreshToken) {
            return res.status(403).json({ message: 'Access denied,token missing!' });
        } else {
            //query for the token to check if it is valid:
            const user = await User.findOne({
                where: { refreshToken },
            });

            //send error if no token found:
            if (!user) {
                return res.status(401).json({ message: 'Token expired or invalid!' });
            } else {
                //extract payload from refresh token and generate a new access token and send it
                const payload = { id: user.id };

                const accessToken = getToken(payload, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_LIFE);
                const refreshToken = getToken(
                    payload,
                    process.env.REFRESH_TOKEN_SECRET,
                    process.env.REFRESH_TOKEN_LIFE,
                );

                // Save new refresh token to DB
                user.refreshToken = refreshToken;
                await user.save();

                // Send new Cookie
                res.cookie('jwt', refreshToken, { httpOnly: true });

                return res.status(200).json({ results: { accessToken } });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const logout = async (req: Request, res: Response): Promise<Response> => {
    res.clearCookie('jwt');
    return res.status(200).json({ message: 'Succesfully Sign out' });
};
