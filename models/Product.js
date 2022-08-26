const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Product =  sequelize.define(
    'product', 
    {
        id: {
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
            type: DataTypes.FLOAT
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
        }
    }, {
        timestamps: false
    });


module.exports = Product;