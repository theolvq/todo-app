import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const Todo = ({ todo, setTodos }) => {
  const handleChange = (e) => {
    const updatedTodo = { ...todo, isDone: e.target.checked };
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)));
  };

  const style = {
    color: 'gray',
    textDecoration: 'line-through',
  };

  return (
    <ListItem>
      <Checkbox name='done' onChange={handleChange} />
      <Typography style={todo.isDone ? style : null}> {todo.todo} </Typography>
    </ListItem>
  );
};

export default Todo;
