const ToDo = ({ toDo, setToDos }) => {
  const handleChange = (e) => {
    const isDone = e.target.checked;
    setToDos((prev) =>
      prev.map((t) => (t.id === toDo.id ? { ...t, isDone } : t))
    );
  };

  const style = {
    textDecoration: "strikeThrough",
  };

  return (
    <li>
      <input type='checkbox' name='done' onChange={handleChange} />
      <span style={toDo.isDone ? style : null}> {toDo.toDo} </span>

      <button>{toDo.isImportant ? "important" : "not important"} </button>
    </li>
  );
};

export default ToDo;
