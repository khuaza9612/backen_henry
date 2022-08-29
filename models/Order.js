const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adressShipping: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ordersInfo: {
            type: DataTypes.STRING,
            defaultValue: 'En preparación.'
        },
        operationNum: {
            type: DataTypes.BIGINT
        }
    }, 
    {
        timestamps: false
    });
};