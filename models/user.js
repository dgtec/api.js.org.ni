/* eslint camelcase: 0 */

const cryptoRandomString = require('crypto-random-string');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    active: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    email_verification_token: {
      defaultValue: () => cryptoRandomString(24),
      type: DataTypes.STRING
    },
    email_verified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    tableName: 'users',
    underscored: true
  });

  return User;
};
