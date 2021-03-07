'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('shops', {
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
            images: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
            },
            rating: {
                type: Sequelize.INTEGER(),
                defaultValue: 0,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT(1500),
                allowNull: false,
            },
            userId: {
                type: Sequelize.UUID,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
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
        await queryInterface.dropTable('shops');
    },
};
