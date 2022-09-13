const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('bill',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        billNumber: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            default: 1
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
            allowNull: false,
            type: DataTypes.BIGINT,
            allowNull: false
        },
        observations: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },  
    {
        timestamps: false
    });
}; 

