import { Request, Response, NextFunction } from 'express';
import { MulterError } from 'multer';

const sharp = require('sharp');
const multer = require('multer');
const uploadFiles = require('../helpers/initMulter');

export const uploadImages = (req: Request, res: Response, next: NextFunction) => {
    uploadFiles(req, res, (err: MulterError) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                return res.status(422).json({ message: 'Too many files to upload. Max is 5 images' });
            }
        } else if (err) {
            return res.status(400).json({ message: err });
        }

        if (req.files.length === 0) {
            return res.status(422).json({ message: 'Upload at least one image' });
        }

        next();
    });
};

export const resizeImages = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files) return next();

    req.body.images = [];

    await Promise.all(
        (req.files as any).map(async (file: any) => {
            // Delete extension file name
            const filename = file.originalname.replace(/\..+$/, '');

            const newFilenameOnJPG = `${filename}-${Date.now()}.jpeg`;
            const newFilenameOnWebp = `${filename}-${Date.now()}.webp`;

            await sharp(file.buffer)
                .resize(640, 320)
                .toFormat('jpeg')
                .jpeg({ quality: 80 })
                .toFile(`public/${newFilenameOnJPG}`);

            await sharp(file.buffer)
                .resize(640, 320)
                .toFormat('webp')
                .webp({ quality: 80 })
                .toFile(`public/${newFilenameOnWebp}`);

            req.body.images.push(newFilenameOnJPG, newFilenameOnWebp);
        }),
    );

    next();
};
