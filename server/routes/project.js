const router = require('express').Router();
const projects = require('./dummydata');

router.get('/', (req, res) => {
  res.send(projects);
});

router.post('/', (req, res) => {
  const updatedProjects = projects.map((project) => project.id);
  res.send(updatedProjects);
});

module.exports = router;
