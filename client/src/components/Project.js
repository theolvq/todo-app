import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const Project = ({ project, projects, setProjects }) => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Typography variant='subtitle1'>
        {project.name} due on: {project.deadline}
      </Typography>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        projectId={project.id}
        projects={projects}
        setProjects={setProjects}
      />
      <List>
        {project.todos
          .sort((item) => (item.isDone ? 1 : -1))
          .map((todo) => (
            <Todo
              key={todo.id}
              project={project}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
      </List>
    </div>
  );
};

export default Project;
