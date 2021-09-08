const { DataTypes } = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
  },
});

module.exports = Project;
