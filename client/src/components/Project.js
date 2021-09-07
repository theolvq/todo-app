import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const Project = ({ project, projects, setProjects }) => {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      <Typography variant='subtitle1'>
        {project.name} due on: {project.deadline}
      </Typography>
      <ToDoForm
        toDos={toDos}
        setToDos={setToDos}
        projectId={project.id}
        projects={projects}
        setProjects={setProjects}
      />
      <List>
        {project.toDos
          .sort((item) => (item.isDone ? 1 : -1))
          .map((toDo) => (
            <ToDo
              key={toDo.id}
              project={project}
              toDo={toDo}
              setToDos={setToDos}
            />
          ))}
      </List>
    </div>
  );
};

export default Project;
