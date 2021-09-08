const express = require('express');
const morgan = require('morgan');
const projectRouter = require('./routes/project');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/projects', projectRouter);

module.exports = app;
