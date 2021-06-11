'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'product-histories',
            [
                {
                    historyId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    quantity: 2,
                },
                {
                    historyId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    productId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    quantity: 3,
                },
                {
                    historyId: 'ea27a7b8-092f-4153-9382-835ac64b7ffc',
                    productId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    quantity: 5,
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('product-histories', null, {});
    },
};
