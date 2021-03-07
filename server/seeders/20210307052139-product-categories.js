'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'product-categories',
            [
                {
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    categoryId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('product-categories', null, {});
    },
};
