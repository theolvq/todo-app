const express = require('express');
const morgan = require('morgan');
const projectRouter = require('./routes/project');
const todoRouter = require('./routes/todo');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/projects', projectRouter);
app.use('/api/todos', todoRouter);

module.exports = app;
