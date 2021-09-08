const { DataTypes } = require('sequelize');
const db = require('../db');

const Todo = db.define('todo', {
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Todo;
