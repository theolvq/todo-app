import { useState } from "react";

const ToDoForm = ({ toDos, setToDos }) => {
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
    const id = toDos.length;
    const isDone = false;
    e.preventDefault();
    setToDos((prev) => [...prev, { id, toDo, isImportant, isDone }]);
    setToDo("");
  };

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
