const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('bill',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'El email no es válido',
                    args: true
                }
            }
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        celNumber: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        buyersId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },  
    {
        timestamps: false
    });
};