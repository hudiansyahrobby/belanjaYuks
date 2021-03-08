'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('favorites', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            userId: {
                type: Sequelize.UUID,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('favorites');
    },
};
