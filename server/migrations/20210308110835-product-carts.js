'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product-carts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            cartId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'carts',
                    key: 'id',
                },
            },
            productId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'products',
                    key: 'id',
                },
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('product-carts');
    },
};
