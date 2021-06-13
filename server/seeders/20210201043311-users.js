'use strict';

const bcrypt = require('bcryptjs');

const hashPassword = (password) =>
    bcrypt.hash(password, 10).then((hash) => {
        return hash;
    });

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    id: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    firstName: 'John',
                    lastName: 'Carlos',
                    email: 'john1@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    firstName: 'John',
                    lastName: 'Alexander',
                    email: 'john2@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'aeddaaf2-e287-4cfa-8c53-5ab9ace6ca1f',
                    firstName: 'John',
                    lastName: 'Cena',
                    email: 'john4@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '278088ec-4d5e-4d13-96ae-58f12baa4fc6',
                    firstName: 'John',
                    lastName: 'Bon',
                    email: 'john5@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'cb7b3ec7-1e4e-46da-b5be-ed2b4fe68958',
                    firstName: 'John',
                    lastName: 'John',
                    email: 'john6@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '85f445cf-c9ea-432e-a40b-ca70e5689ec8',
                    firstName: 'John',
                    lastName: 'Hood',
                    email: 'john7@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '2938d85c-abc2-49d0-85f3-bec939231d7f',
                    firstName: 'John',
                    lastName: 'Lesnar',
                    email: 'john8@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '7a52e462-5578-4389-b6d7-5782e57830e0',
                    firstName: 'John',
                    lastName: 'Mysterio',
                    email: 'john9@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '3e369cd9-fc96-43bf-93ef-ccec3c98c81a',
                    firstName: 'John',
                    lastName: 'John',
                    email: 'john3@gmail.com',
                    role: 'admin',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    },
};
