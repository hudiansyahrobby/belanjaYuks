'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'categories',
            [
                {
                    id: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    name: 'nike',
                    image:
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    name: 'adidas',
                    image:
                        'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'b2f8e299-b9d5-4ddc-8e77-c7db323d85b6',
                    name: 'puma',
                    image:
                        'https://images.unsplash.com/photo-1571736772567-3aa763ff559a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'fbca3797-fc1e-481c-afae-5435580805f8',
                    name: 'new balance',
                    image:
                        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'ca76a6f4-d5c6-414f-a56e-124fa5cb80d1',
                    name: 'converse',
                    image:
                        'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '5ce94ff5-3d1a-4e16-a88d-676f0d2b2522',
                    name: 'asics',
                    image:
                        'https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=800',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'c8294162-1c4c-445d-86ce-ee29d3fe3cd1',
                    name: 'skechers',
                    image: 'https://www.comprarmelhor.com/images/u/skechers%20running%20shoes%20for%20men-071kcr.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '128da8af-ee84-4c74-84b2-05e3dc5df78a',
                    name: 'fila',
                    image:
                        'https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '8c2cd268-01f8-4a4e-bb44-06702baf0acf',
                    name: 'bata',
                    image:
                        'https://rukminim1.flixcart.com/image/714/857/k4u7i4w0/shoe/z/2/u/b821-6116-11-bata-black-original-imafn3arcscxjjfp.jpeg?q=50',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('categories', null, {});
    },
};
