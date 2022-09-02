const { DataTypes } = require('sequelize');
//const sequelize = require('../db');

module.exports = (sequelize) => {
    sequelize.define(
        'product', 
        {
            id: {
                //min:100,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,                
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            brand: {
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER
            },
            discount: {
                type: DataTypes.INTEGER
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            stock: {
                type: DataTypes.INTEGER
            },
            genre: {
                type: DataTypes.STRING
            },
            sport: {
                type: DataTypes.STRING
            },
            size: {
                type: DataTypes.STRING
            }
        }, {
            timestamps: false
        });
};

