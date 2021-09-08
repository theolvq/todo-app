const router = require('express').Router();
const { Project } = require('../db/models');
const projects = require('./dummydata');

router.get('/', (req, res) => {
  res.send(projects);
});

router.post('/', async (req, res) => {
  const { name, deadline } = req.body;
  const project = Project.create({ name, deadline });
  return res.json({ project });
});

module.exports = router;
