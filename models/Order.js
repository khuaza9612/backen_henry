const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adressShipping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ordersInfo: {
            type: DataTypes.STRING,
            defaultValue: 'En preparación.'
        },
        orderNumber: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            default: 1
        }
    }, 
    {
        timestamps: false
    });
};