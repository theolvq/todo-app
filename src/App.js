import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDos, setToDos] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <div>
      <h1>Just do it!</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ProjectForm projects={projects} setProjects={setProjects} />
      <div>
        <ul>
          {toDos
            .sort((item) => (item.isDone ? 1 : -1))
            .map((toDo) => (
              <ToDo key={toDo.id} toDo={toDo} setToDos={setToDos} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
