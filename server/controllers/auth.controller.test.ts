import app from '../app';
import supertest from 'supertest';
import sequelize from '../config/sequelize';

const request = supertest(app);

afterAll((done) => {
    sequelize.close();
    done();
});

describe('Auth Endpoints', () => {
    describe('Sign user up', () => {
        it('When name contains non alphapets, then send error ', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha23',
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('name should only contain alphapet or space');
        });

        it('When no name is specified, then send field is required ', async () => {
            const res = await request.post('/api/v1/signup').send({
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('name is a required field');
        });

        it('When email is not valid, then send error', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusiagmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('email is not valid');
        });

        it('When no email is specified, then send field is required ', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('email is a required field');
        });

        it('When password less than 8, then send error', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusia@gmail.com',
                password: 'Maia12,',
                passwordConfirmation: 'Maia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('password must be at least 8 characters');
        });

        it("When password doesn't contain at least one uppercase letter, one lowercase letter, one number and one special character, then send error", async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusia@gmail.com',
                password: 'Manusia12',
                passwordConfirmation: 'Manusia12',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe(
                'password must be at least one uppercase letter, one lowercase letter, one number and one special character',
            );
        });

        it('When no password is specified, then send field is required ', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusia@gmail.com',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('password is a required field');
        });

        it('When no confirmation password is specified, then send field is required ', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('password confirmation is a required field');
        });

        it("When confirmation password and password don't match, then error", async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'hahaha',
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,dg',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('password does not match');
        });

        it('should create a new user', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'manusia',
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(201);
            expect(res.body.message).toBe('User successfully registered');
            expect(res.body.user).toHaveProperty('id');
            expect(res.body.user).toHaveProperty('name', 'manusia');
            expect(res.body.user).toHaveProperty('email', 'manusia@gmail.com');
            expect(res.body.user).toHaveProperty('createdAt');
            expect(res.body.user).toHaveProperty('role');
            expect(res.body.user).not.toHaveProperty('password');
            expect(res.body.user).not.toHaveProperty('refreshToken');
            expect(res.body.user).not.toHaveProperty('resetToken');
        });

        it('If user already registered, send error', async () => {
            const res = await request.post('/api/v1/signup').send({
                name: 'manusia',
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
                passwordConfirmation: 'Manusia12,',
            });
            expect(res.status).toBe(400);
            expect(res.body.message).toBe('This is email has been registered');
        });
    });

    describe('Log user in', () => {
        it('When email is not valid, then send error', async () => {
            const res = await request.post('/api/v1/login').send({
                email: 'manusiagmail.com',
                password: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('email is not valid');
        });

        it('When no email is specified, then send field is required ', async () => {
            const res = await request.post('/api/v1/login').send({
                password: 'Manusia12,',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('email is a required field');
        });

        it('when email is not registered, send error', async () => {
            const res = await request.post('/api/v1/login').send({
                email: 'manusia77@gmail.com',
                password: 'Manusia12,',
            });
            expect(res.status).toBe(400);
            expect(res.body.message).toBe('Email or Password is not valid');
        });

        it('When no password is specified, then send field is required', async () => {
            const res = await request.post('/api/v1/login').send({
                email: 'manusia@gmail.com',
            });
            expect(res.status).toBe(422);
            expect(res.body.message).toBe('password is a required field');
        });

        it('When password is wrong, then send error', async () => {
            const res = await request.post('/api/v1/login').send({
                email: 'manusia@gmail.com',
                password: 'Manusia,',
            });
            expect(res.status).toBe(400);
            expect(res.body.message).toBe('Email or Password is not valid');
        });

        it('should login as user', async () => {
            const res = await request.post('/api/v1/login').send({
                email: 'manusia@gmail.com',
                password: 'Manusia12,',
            });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('accessToken');
        });
    });

    describe('Log user out', () => {
        it('should log user out', async () => {
            const res = await request.post('/api/v1/logout');
            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Succesfully Sign out');
        });
    });
});
