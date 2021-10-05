import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';

const TodoForm = ({ setProjects, projectId, todos, setTodos }) => {
  const [todo, setTodo] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'todo') {
      setTodo(target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log('submitting');
    const id = todos.length + 1;
    e.preventDefault();
    setTodos((prev) => [...prev, { id, todo, isDone: false }]);
    setTodo('');
  };

  useEffect(() => {
    console.log('use effect');
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row>
        <TextField
          label='Add a task'
          type='text'
          name='todo'
          value={todo}
          onChange={handleChange}
        />
        <Button type='submit'>+</Button>
      </FormGroup>
    </form>
  );
};

export default TodoForm;
