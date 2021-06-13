'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'product-categories',
            [
                {
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    categoryId: 'ca76a6f4-d5c6-414f-a56e-124fa5cb80d1',
                },
                {
                    productId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '3cfe5a24-09db-4cdd-adde-176fc3fbf7ef',
                    categoryId: 'b2f8e299-b9d5-4ddc-8e77-c7db323d85b6',
                },
                {
                    productId: '4d5d17d8-d405-4ac3-820c-3341a0357c98',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '19018647-e4ce-43ed-a978-e4f79b768dfe',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '1acdb889-5da1-4591-a6b8-8e1e31417bdc',
                    categoryId: 'ca76a6f4-d5c6-414f-a56e-124fa5cb80d1',
                },
                {
                    productId: 'a376ebe9-18f8-4850-af5d-ff6c87e58a1e',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: 'e9a65e6c-7c8b-43d8-a3c8-731678ae0441',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '4b564668-5f9d-4308-8bf0-34614393b08b',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: 'bb4517ea-a9c7-4f2b-a49d-01fccfbbe40c',
                    categoryId: '96b46303-46ee-4c94-b774-eaabbf14777e',
                },
                {
                    productId: '134f9237-cdef-485c-8dd2-557b3ab96a3c',
                    categoryId: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                },
                {
                    productId: '5d907a4c-a4a2-48de-9091-7a1879c4a22a',
                    categoryId: 'fbca3797-fc1e-481c-afae-5435580805f8',
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('product-categories', null, {});
    },
};
