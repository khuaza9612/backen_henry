const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rating: {
            type: DataTypes.ENUM({
                values: ["1","2","3","4","5"]
            }),
            allowNull: false
        }
    }, {
        timestamps: false
    });
  };

