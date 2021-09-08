const db = require('./db');
const { Todo, Project } = require('./models');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db has synced');

  const project1 = await Project.create({
    name: 'build website',
    deadline: '2021-11-11',
  });

  const project2 = await Project.create({
    name: 'design website',
    deadline: '2021-12-12',
  });

  await Todo.create({
    projectId: project1.id,
    todo: 'create database',
  });
  await Todo.create({
    projectId: project1.id,
    todo: 'create UI',
  });
  await Todo.create({
    projectId: project1.id,
    todo: 'create server',
  });

  await Todo.create({
    projectId: project2.id,
    todo: 'design UI',
  });
  await Todo.create({
    projectId: project2.id,
    todo: 'design UX',
  });
};

const runSeed = async () => {
  console.log('seeding db');
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
};

runSeed();
