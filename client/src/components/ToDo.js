const ToDo = ({ toDo, setToDos }) => {
  const handleChange = (e) => {
    const updatedToDo = { ...toDo, isDone: e.target.checked };
    setToDos((prev) => prev.map((t) => (t.id === toDo.id ? updatedToDo : t)));
  };

  const style = {
    color: "gray",
    textDecoration: "line-through",
  };

  const toggleImportance = (e) => {
    setToDos((prev) =>
      prev.map((t) =>
        t.id === toDo.id ? { ...t, isImportant: !toDo.isImportant } : t
      )
    );
  };

  return (
    <li>
      <input type='checkbox' name='done' onChange={handleChange} />
      <span style={toDo.isDone ? style : null}> {toDo.toDo} </span>

      <button onClick={toggleImportance}>
        {toDo.isImportant ? "important" : "not important"}{" "}
      </button>
    </li>
  );
};

export default ToDo;
