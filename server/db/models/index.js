const Project = require('./project');
const Todo = require('./todo');

// associations

Todo.belongsTo(Project);
Project.hasMany(Todo);

module.exports = {
  Project,
  Todo,
};
