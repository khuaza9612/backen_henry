const { Sequelize } = require('sequelize');


 const sequelize = new Sequelize('postgres://postgres:Hk1143985102@localhost:5433/gym', {
  logging: false,
});


module.exports = sequelize;
