const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El email no es válido',
            args: true,
          },
        },
      },
      image: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passConfirmation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM,
        values: ['admin', 'user'],
        defaultValue: 'user',
      },
    },
    {
      timestamps: false,
    }
  );
}

// const User = sequelize.define(
//   'user',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: {
//           msg: 'El email no es válido',
//           args: true,
//         },
//       },
//     },
//     image: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     passConfirmation: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rol: {
//       type: DataTypes.ENUM,
//       values: ['admin', 'user'],
//       defaultValue: 'user',
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

// User.beforeCreate(async (user) => {
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
//   user.passConfirmation = user.password;
// });


// module.exports = User;
