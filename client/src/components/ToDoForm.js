import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';

const ToDoForm = ({ setProjects, projectId, toDos, setToDos }) => {
  const [toDo, setToDo] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'todo') {
      setToDo(target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log('submitting');
    const id = toDos.length + 1;
    e.preventDefault();
    setToDos((prev) => [...prev, { id, toDo, isDone: false }]);
    setToDo('');
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
      <FormGroup row>
        <TextField
          label='Add a task'
          type='text'
          name='todo'
          value={toDo}
          onChange={handleChange}
        />
        <Button type='submit'>+</Button>
      </FormGroup>
    </form>
  );
};

export default ToDoForm;
