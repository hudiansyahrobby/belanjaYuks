'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product-categories', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
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
            categoryId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'categories',
                    key: 'id',
                },
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('product-categories');
    },
};
