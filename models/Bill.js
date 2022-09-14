const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('factura',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
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
            validate: {
                isEmail: {
                    msg: 'El email no es válido',
                    args: true
                }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        celNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
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

