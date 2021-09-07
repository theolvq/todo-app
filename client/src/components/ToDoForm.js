import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useEffect, useState } from 'react';

const ToDoForm = ({ setProjects, projectId, toDos, setToDos }) => {
  const [toDo, setToDo] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = ({ target }) => {
    if (target.name === 'todo') {
      setToDo(target.value);
    }
    if (target.name === 'isImportant') {
      setIsImportant(target.checked);
    }
  };

  const handleSubmit = (e) => {
    console.log('submitting');
    const id = toDos.length + 1;
    e.preventDefault();
    setToDos((prev) => [...prev, { id, toDo, isImportant, isDone: false }]);
    setToDo('');
    setIsImportant(false);
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
        <FormControlLabel
          value='isImportant'
          control={
            <Checkbox
              color='primary'
              name='isImportant'
              checked={isImportant}
              onChange={handleChange}
            />
          }
          label='Important'
          labelPlacement='end'>
          Important
        </FormControlLabel>

        <Button type='submit'>+</Button>
      </FormGroup>
    </form>
  );
};

export default ToDoForm;
