const { Sequelize } = require('sequelize');


 const sequelize = new Sequelize('postgres://postgres:PGenius1@localhost/gym', {
  logging: false,
});


module.exports = sequelize;
