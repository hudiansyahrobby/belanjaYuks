'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product-favorites', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            favoriteId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'favorites',
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
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('product-favorites');
    },
};
