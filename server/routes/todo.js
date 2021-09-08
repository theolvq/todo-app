const router = require('express').Router();
const { Todo } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      attributes: ['id', 'todo', 'isDone', 'projectId'],
    });
    res.json(todos);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findOne({
      attributes: ['id', 'todo', 'isDone', 'projectId'],
    });
    res.json(todo);
  } catch (err) {
    console.err(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { todo, projectId } = req.body;
    const newTodo = await Todo.create({ todo, projectId });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { todo, isDone } = req.body;
    const { id } = req.params;

    await Todo.update(
      { todo, isDone },
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
    await Todo.destroy({
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
