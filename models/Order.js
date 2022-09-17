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

        orderStatus:{  
            type: DataTypes.ENUM('created', 'processing', 'cancelled', 'completed'),
            allowNull: false,
            defaultValue: 'created'

        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    },
   );
};



// payment_id:{
//     type: DataTypes.INTEGER,
//     defaultValue: 0
// },
// payment_status:{
//     type: DataTypes.STRING,
//     defaultValue: ""
// },
// merchant_order_id: {
//     type: DataTypes.BIGINT,
//     defaultValue: 0
// }
