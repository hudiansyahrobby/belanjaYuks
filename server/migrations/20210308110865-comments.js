'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('comments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            content: {
                type: Sequelize.TEXT(),
                allowNull: false,
            },
            rating: {
                type: Sequelize.INTEGER(),
                allowNull: false,
            },
            userId: {
                type: Sequelize.UUID,
                references: {
                    model: 'users',
                    foreignKey: 'id',
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            productId: {
                type: Sequelize.UUID,
                references: {
                    model: 'products',
                    foreignKey: 'id',
                },
                onDelete: 'CASCADE',
                allowNull: false,
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
        await queryInterface.dropTable('comments');
    },
};
