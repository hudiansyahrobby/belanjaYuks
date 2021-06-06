'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING(70),
                allowNull: false,
            },
            rating: {
                type: Sequelize.INTEGER(),
                allowNull: false,
                defaultValue: 0,
            },
            quantity: {
                type: Sequelize.INTEGER(),
                allowNull: false,
            },
            images: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT(1500),
                allowNull: false,
            },
            isSecond: {
                type: Sequelize.BOOLEAN(),
                allowNull: false,
            },
            shopId: {
                type: Sequelize.UUID,
                onDelete: 'CASCADE',
                references: {
                    model: 'shops',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('products');
    },
};
