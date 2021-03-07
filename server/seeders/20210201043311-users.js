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
                    name: 'John Doe1',
                    email: 'john1@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    name: 'John Doe2',
                    email: 'john2@gmail.com',
                    role: 'seller',
                    password: await hashPassword('1234567890'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '3e369cd9-fc96-43bf-93ef-ccec3c98c81a',
                    name: 'John Doe',
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
