const { DataTypes } = require('sequelize');
const db = require('../db');

const Todo = db.define('todo', {
  toDo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
