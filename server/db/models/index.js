const Project = require('./project');
const Todo = require('./todo');

// associations

Project.hasMany(Todo);
Todo.belongsTo(Project);

module.exports = {
  Project,
  Todo,
};
