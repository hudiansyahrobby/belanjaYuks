'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product-histories', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            historyId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'histories',
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
            qty: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('product-histories');
    },
};
