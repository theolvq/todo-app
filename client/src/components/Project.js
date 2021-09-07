import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const Project = ({ project, projects, setProjects }) => {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      {project.name} due on: {project.deadline}
      <ToDoForm
        toDos={toDos}
        setToDos={setToDos}
        projectId={project.id}
        projects={projects}
        setProjects={setProjects}
      />
      <ul>
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
      </ul>
    </div>
  );
};

export default Project;
