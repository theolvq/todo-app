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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'deadline'],
      include: [
        {
          model: Todo,
          attributes: ['id', 'todo', 'isDone', 'projectId'],
        },
      ],
    });
    res.json(project);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, deadline } = req.body;
    const project = await Project.create({ name, deadline });
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, deadline } = req.body;
    const { id } = req.params;

    await Project.update(
      { name, deadline },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).end();
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
