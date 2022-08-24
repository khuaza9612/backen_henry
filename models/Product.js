const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    
  sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    brand: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    discount: {
        type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
};
