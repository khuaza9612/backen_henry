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
        adressShipping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderStatus:{  
            type: DataTypes.ENUM('created', 'processing', 'cancelled', 'completed'),
            allowNull: false
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