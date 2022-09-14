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
          adressNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          floor:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          department:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          zipCode:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          province:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          location:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          dni:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, 
    {
        timestamps: false
    });
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