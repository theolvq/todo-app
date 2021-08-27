import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      <h1>Just do it!</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <div>
        <ul>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} toDo={toDo} setToDos={setToDos} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
