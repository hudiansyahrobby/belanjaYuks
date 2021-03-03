import app from '../app';
import supertest from 'supertest';
import sequelize from '../config/sequelize';
import fs from 'mz/fs';
import path from 'path';

const request = supertest(app);

let token: string;
beforeAll((done) => {
    request
        .post('/api/v1/login')
        .send({
            email: 'john3@gmail.com',
            password: '1234567890',
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

afterAll((done) => {
    sequelize.close();
    done();
});

describe('Product Endpoints', () => {
    describe('Create new product', () => {
        it('When name is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('name is a required field');
        });

        it('When quantity is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('quantity is a required field');
        });

        it('When quantity is not greater than 0, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 0)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('quantity must be greater than 0');
        });

        it('When images is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('images is a required field');
        });

        it('When price is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('price is a required field');
        });

        it('When price is not greater than 0, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 0)
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('price must be greater than 0');
        });

        it('When description is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('description is a required field');
        });

        it('When description length is less than 150, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field('description', 'lorem ipsum')
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When isSecond is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('isSecond is a required field');
        });

        it('When there is no error, create new product', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/destinations')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(201);
            expect(res.body.message).toBe('Product successfully created');
            expect(res.body.product).toHaveProperty('id');
            expect(res.body.product).toHaveProperty('name', 'Sepatu super');
            expect(res.body.product).toHaveProperty('quantity', 10);
            expect(res.body.product).toHaveProperty('price', 5000);
            expect(res.body.product).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
            );
            expect(res.body.product).toHaveProperty('isSecond', false);
            expect(res.body.product).toHaveProperty('images');
            expect(res.body.product.images).toHaveLength(2);
        });
    });

    describe('Get product list', () => {
        it('Get All products', async () => {
            const res = await request.get('/api/v1/products').expect(200);
            expect(res.body.products).toHaveProperty('totalItems', 4);
            expect(res.body.products).toHaveProperty('totalPages', 1);
            expect(res.body.products).toHaveProperty('currentPage', 0);
            expect(res.body.products).toHaveProperty('results');
            expect(res.body.products.results).toHaveLength(4);
        });

        it('Get destination detail', async () => {
            const res = await request.get('/api/v1/products/1').expect(200);
            expect(res.body.product).toHaveProperty('name');
            expect(res.body.product).toHaveProperty('quantity');
            expect(res.body.product).toHaveProperty('price');
            expect(res.body.product).toHaveProperty('description');
            expect(res.body.product).toHaveProperty('isSecond');
            expect(res.body.product.images).toHaveLength(2);
        });
    });

    describe('update product', () => {
        it('When name is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('name is a required field');
        });

        it('When quantity is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('quantity is a required field');
        });

        it('When quantity is not greater than 0, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 0)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('quantity must be greater than 0');
        });

        it('When images is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field('price', 5000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('images is a required field');
        });

        it('When price is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('price is a required field');
        });

        it('When price is not greater than 0, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 0)
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('price must be greater than 0');
        });

        it('When description is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('description is a required field');
        });

        it('When description length is less than 150, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field('description', 'lorem ipsum')
                .field('isSecond', false)
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When isSecond is not specified, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${token}`)
                .expect(422);
            expect(res.body.message).toBe('isSecond is a required field');
        });

        it('When product not found, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/10')
                .attach('images', filePath)
                .field('name', 'Sepatu super')
                .field('price', 5000)
                .field('quantity', 10)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${token}`)
                .expect(404);
            expect(res.body.message).toBe('Product not found');
        });

        it('When there is no error, update product', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/destinations/1')
                .attach('images', filePath)
                .field('name', 'Baju super')
                .field('quantity', 15)
                .field('price', 10000)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsz",
                )
                .field('isSecond', true)
                .set('Authorization', `Bearer ${token}`)
                .expect(201);
            expect(res.body.message).toBe('Product successfully updated');
            expect(res.body.product).toHaveProperty('id');
            expect(res.body.product).toHaveProperty('name', 'Baju super');
            expect(res.body.product).toHaveProperty('quantity', 15);
            expect(res.body.product).toHaveProperty('price', 10000);
            expect(res.body.product).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsz",
            );
            expect(res.body.product).toHaveProperty('isSecond', true);
            expect(res.body.product).toHaveProperty('images');
            expect(res.body.product.images).toHaveLength(2);
        });
    });

    describe('delete product', () => {
        it('When product not found, send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .delete('/api/v1/destinations/10')
                .set('Authorization', `Bearer ${token}`)
                .expect(404);
            expect(res.body.message).toBe('Product not found');
        });

        it('When there is no error, delete product', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .delete('/api/v1/destinations/1')
                .set('Authorization', `Bearer ${token}`)
                .expect(201);
            expect(res.body.message).toBe('Product deleted successfully');
            expect(res.body.product).toHaveProperty('id');
            expect(res.body.product).toHaveProperty('name', 'Baju super');
            expect(res.body.product).toHaveProperty('quantity', 15);
            expect(res.body.product).toHaveProperty('price', 10000);
            expect(res.body.product).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsz",
            );
            expect(res.body.product).toHaveProperty('isSecond', true);
            expect(res.body.product).toHaveProperty('images');
            expect(res.body.product.images).toHaveLength(2);
        });
    });
});
