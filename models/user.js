const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User =sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    notNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    notNull: true
  },
  email: {
    type: Sequelize.STRING,
    notNull: true
  },
  id: {
    type: Sequelize.STRING,
    primaryKey: true
    notNull: true
  }
});

User.associate = (models) => {
    User.hasMany(models.Subscription, {
      onDelete: "cascade"
    });
  };

module.exports = User;
