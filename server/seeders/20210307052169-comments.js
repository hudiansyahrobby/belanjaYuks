'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'comments',
            [
                {
                    id: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    content: 'Brilliant',
                    rating: 5,
                    userId: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'ea27a7b8-092f-4153-9382-835ac64b7ffc',
                    content: 'Marvelous',
                    rating: 4,
                    userId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'c7f5659e-18f0-44be-94b6-ce741d35ae0f',
                    content: 'Nice',
                    rating: 5,
                    userId: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    productId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '8e23f81f-3d6a-45ed-b03b-cdbe492aaa9a',
                    content: 'So comfy',
                    rating: 4,
                    userId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    productId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comments', null, {});
    },
};
