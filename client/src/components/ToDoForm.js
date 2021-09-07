import { useEffect, useState } from "react";

const ToDoForm = ({ setProjects, projectId, toDos, setToDos }) => {
  const [toDo, setToDo] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = ({ target }) => {
    if (target.name === "todo") {
      setToDo(target.value);
    }
    if (target.name === "important") {
      setIsImportant(target.checked);
    }
  };

  const handleSubmit = (e) => {
    const id = toDos.length + 1;
    e.preventDefault();
    setToDos((prev) => [...prev, { id, toDo, isImportant, isDone: false }]);
    setToDo("");
  };

  useEffect(() => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, toDos } : project
      )
    );
  }, [toDos, projectId, setProjects]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Add a task'
        type='text'
        name='todo'
        value={toDo}
        onChange={handleChange}
      />
      <label>Important ?</label>
      <input
        type='checkbox'
        name='important'
        value={isImportant}
        onChange={handleChange}
      />
      <button>+</button>
    </form>
  );
};

export default ToDoForm;
