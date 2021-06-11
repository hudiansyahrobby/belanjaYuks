'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'histories',
            [
                {
                    id: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    userId: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'ea27a7b8-092f-4153-9382-835ac64b7ffc',
                    userId: '22a606bd-8c71-4407-ba8b-7e6ad2c9c07d',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('histories', null, {});
    },
};
