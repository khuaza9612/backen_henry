const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        titleProduct: {
            type: DataTypes.TEXT,
            allowNull: false      
        },
        quantity: {        
            type: DataTypes.INTEGER,
            allowNull: false      
        },
        adressShipping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderStatus:{  
            type: DataTypes.ENUM('created', 'processing', 'cancelled', 'completed'),
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, 
    {
        timestamps: false
    });
};