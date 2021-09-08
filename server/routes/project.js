const router = require('express').Router();
const { Project, Todo } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'deadline'],
      include: [
        {
          model: Todo,
          attributes: ['id', 'todo', 'isDone', 'projectId'],
        },
      ],
    });
    res.json(projects);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, deadline } = req.body;
    const project = Project.create({ name, deadline });
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.status(204).end();
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
