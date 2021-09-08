import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const ToDo = ({ toDo, setToDos }) => {
  const handleChange = (e) => {
    const updatedToDo = { ...toDo, isDone: e.target.checked };
    setToDos((prev) => prev.map((t) => (t.id === toDo.id ? updatedToDo : t)));
  };

  const style = {
    color: 'gray',
    textDecoration: 'line-through',
  };

  return (
    <ListItem>
      <Checkbox name='done' onChange={handleChange} />
      <Typography style={toDo.isDone ? style : null}> {toDo.toDo} </Typography>
    </ListItem>
  );
};

export default ToDo;
