import app from '../app';
import supertest from 'supertest';
import sequelize from '../config/sequelize';
import fs from 'mz/fs';
import path from 'path';

const request = supertest(app);

let tokenAdmin: string;
let tokenUser: string;
beforeAll((done) => {
    request
        .post('/api/v1/login')
        .send({
            email: 'john3@gmail.com',
            password: '1234567890',
        })
        .end((err, response) => {
            tokenAdmin = response.body.accessToken; // save the token!

            request
                .post('/api/v1/login')
                .send({
                    email: 'john2@gmail.com',
                    password: '1234567890',
                })
                .end((err, response) => {
                    tokenUser = response.body.accessToken;
                    done();
                });
        });
});

afterAll((done) => {
    sequelize.close();
    done();
});

describe('Shop Endpoints', () => {
    describe('Create new Shop', () => {
        it('When name is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name is a required field');
        });

        it('When name is boolean , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', false)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name must be a type of string');
        });

        it('When name is empty , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', '')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name cannot be an empty field');
        });

        it('When image is not exist, send error', async () => {
            const res = await request
                .post('/api/v1/shops')
                .field('name', 'elang')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('images is a required field');
        });

        it('When description is not specified , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be a type of string');
        });

        it('When description is empty , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field('description', '')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description cannot be an empty field');
        });

        it('When description length less than 150 characters , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field('description', 'lorem')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When description length more than 5000 characters , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field(
                    'description',
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligulasd',
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When user is admin, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenAdmin}`)
                .expect(400);
            expect(res.body.message).toBe("You're an admin, you can't have shop");
        });

        it('When shop with same name already exist, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'Garuda Shop')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(400);
            expect(res.body.message).toBe('Shop with this name has exist');
        });

        it('When shop with same name already exist but different uppercase letter, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'GaRuDa Shop')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(400);
            expect(res.body.message).toBe('Shop with this name has exist');
        });

        it('When there is no error, create new shops', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(201);
            expect(res.body.message).toBe('Shop created successfully');
            expect(res.body.shop).toHaveProperty('id');
            expect(res.body.shop).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
            );
            expect(res.body.shop).toHaveProperty('name', 'elang');
            expect(res.body.shop).toHaveProperty('userId');
            expect(res.body.shop).toHaveProperty('updatedAt');
            expect(res.body.shop).toHaveProperty('createdAt');
            expect(res.body.shop).toHaveProperty('images');
            expect(res.body.shop.images).toHaveLength(2);
        });

        it('When user already has shop, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .post('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(400);
            expect(res.body.message).toBe('This user already has shop, delete first');
        });
    });

    describe('Get shop list', () => {
        it('Get all shops', async () => {
            const res = await request.get('/api/v1/shops').expect(200);
            expect(res.body.shops).toHaveProperty('totalItems');
            expect(res.body.shops).toHaveProperty('totalPages');
            expect(res.body.shops).toHaveProperty('currentPage');
            expect(res.body.shops).toHaveProperty('results');
            expect(res.body.shops.results).not.toHaveLength(0);
            expect(res.body.shops.results[0]).toHaveProperty('id');
            expect(res.body.shops.results[0]).toHaveProperty('name');
            expect(res.body.shops.results[0]).toHaveProperty('images');
            expect(res.body.shops.results[0]).toHaveProperty('owner');
            expect(res.body.shops.results[0].owner).toHaveProperty('name');
        });

        it('Get shop detail by id', async () => {
            const res = await request.get('/api/v1/shops/46fda6af-6c3b-435d-aa5e-07214f6e3eef').expect(200);
            expect(res.body.shop).toHaveProperty('id');
            expect(res.body.shop).toHaveProperty('name');
            expect(res.body.shop).toHaveProperty('images');
            expect(res.body.shop).toHaveProperty('owner');
            expect(res.body.shop).toHaveProperty('description');
            expect(res.body.shop).toHaveProperty('userId');
            expect(res.body.shop).toHaveProperty('createdAt');
            expect(res.body.shop).toHaveProperty('updatedAt');
            expect(res.body.shop.owner).toHaveProperty('name');
        });

        it('send error when to try to get products of particular shop that do not exist', async () => {
            const res = await request.get('/shops/products/46fda6af-6c3b-435d-aa5e-07214f6e3eec').expect(404);
            expect(res.body.message).toBe('Shop not found');
        });

        it('get products of particular shop', async () => {
            const res = await request.get('/shops/products/46fda6af-6c3b-435d-aa5e-07214f6e3eef').expect(200);
            expect(res.body.products).toHaveProperty('totalItems');
            expect(res.body.products).toHaveProperty('totalPages');
            expect(res.body.products).toHaveProperty('currentPage');
            expect(res.body.products).toHaveProperty('results');
            expect(res.body.products.results).not.toHaveLength(0);
            expect(res.body.products.results[0]).toHaveProperty('id');
            expect(res.body.products.results[0]).toHaveProperty('name');
            expect(res.body.products.results[0]).toHaveProperty('quantity');
            expect(res.body.products.results[0]).toHaveProperty('images');
            expect(res.body.products.results[0]).toHaveProperty('price');
            expect(res.body.products.results[0]).toHaveProperty('description');
            expect(res.body.products.results[0]).toHaveProperty('isSecond');
            expect(res.body.products.results[0]).toHaveProperty('shopId');
            expect(res.body.products.results[0]).toHaveProperty('createdAt');
            expect(res.body.products.results[0]).toHaveProperty('updatedAt');
            expect(res.body.products.results[0]).toHaveProperty('seller');
            expect(res.body.products.results[0].seller).toHaveProperty('id');
            expect(res.body.products.results[0].seller).toHaveProperty('name');
            expect(res.body.products.results[0]).toHaveProperty('categories');
            expect(res.body.products.results[0].categories[0]).toHaveProperty('id');
            expect(res.body.products.results[0].categories[0]).toHaveProperty('name');
        });
    });

    describe('update category', () => {
        it('When name is not specified, then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name is a required field');
        });

        it('When name is boolean , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', false)
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name must be a type of string');
        });

        it('When name is empty , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', '')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('name cannot be an empty field');
        });

        it('When image is not exist, send error', async () => {
            const res = await request
                .put('/api/v1/shops')
                .field('name', 'elang')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('images is a required field');
        });

        it('When description is not specified , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be a type of string');
        });

        it('When description is empty , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field('description', '')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description cannot be an empty field');
        });

        it('When description length less than 150 characters , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field('description', 'lorem')
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When description length more than 5000 characters , then send error ', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'elang')
                .field(
                    'description',
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligulasd',
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(422);
            expect(res.body.message).toBe('description must be at least 150 characters');
        });

        it('When shop with same name already exist, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'Garuda Shop')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(400);
            expect(res.body.message).toBe('Shop with this name has exist');
        });

        it('When shop with same name already exist but different uppercase letter, then send error', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'GaRuDa Shop')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(400);
            expect(res.body.message).toBe('Shop with this name has exist');
        });

        it('When there is no error, update shop', async () => {
            const filePath = path.join(__dirname, '..', 'testFiles', 'test.jpeg');
            const isFileExist = await fs.exists(filePath);
            if (!isFileExist) throw new Error('file does not exist');
            const res = await request
                .put('/api/v1/shops')
                .attach('images', filePath)
                .field('name', 'ambarawa')
                .field(
                    'description',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorszz",
                )
                .set('Authorization', `Bearer ${tokenUser}`)
                .expect(200);
            expect(res.body.message).toBe('Shop successfully updated');
            expect(res.body.shop).toHaveProperty('id');
            expect(res.body.shop).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorszz",
            );
            expect(res.body.shop).toHaveProperty('name', 'ambarawa');
            expect(res.body.shop).toHaveProperty('userId');
            expect(res.body.shop).toHaveProperty('updatedAt');
            expect(res.body.shop).toHaveProperty('createdAt');
            expect(res.body.shop).toHaveProperty('images');
            expect(res.body.shop.images).toHaveLength(2);
        });
    });

    describe('delete shops', () => {
        it('When user does not have shop, send error', async () => {
            const res = await request.delete('/api/v1/shops').set('Authorization', `Bearer ${tokenUser}`).expect(404);
            expect(res.body.message).toBe('You do not have any shop');
        });

        it('When there is no error, delete shops', async () => {
            const res = await request.delete('/api/v1/shops').set('Authorization', `Bearer ${tokenUser}`).expect(200);
            expect(res.body.message).toBe('Shop successfully deleted');
            expect(res.body.shop).toHaveProperty('id');
            expect(res.body.shop).toHaveProperty(
                'description',
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorszz",
            );
            expect(res.body.shop).toHaveProperty('name', 'ambarawa');
            expect(res.body.shop).toHaveProperty('userId');
            expect(res.body.shop).toHaveProperty('updatedAt');
            expect(res.body.shop).toHaveProperty('createdAt');
            expect(res.body.shop).toHaveProperty('images');
            expect(res.body.shop.images).toHaveLength(2);
        });
    });
});
