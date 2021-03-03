'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING(70),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            refreshToken: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            resetToken: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            role: {
                type: Sequelize.ENUM,
                values: ['buyer', 'admin', 'seller'],
                defaultValue: 'buyer',
            },
            password: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('users');
    },
};
