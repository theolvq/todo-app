import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { getTodaysDate } from '../utils/helper';

const ProjectForm = ({ projects, setProjects }) => {
  const today = getTodaysDate();
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState(today);

  const handleChange = ({ target }) => {
    if (target.name === 'projectName') {
      setProjectName(target.value);
    }
    if (target.name === 'deadline') {
      setDeadline(target.value);
    }
  };

  const handleSubmit = (e) => {
    const id = projects.length + 1;
    e.preventDefault();
    setProjects((prev) => [
      ...prev,
      { id, name: projectName, deadline, todos: [] },
    ]);
    setProjectName('');
    setDeadline(today);
  };

  return (
    <div>
      <Typography variant='h2'>Create a new project</Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup row>
          <TextField
            type='text'
            name='projectName'
            value={projectName}
            onChange={handleChange}
            label='Project title'
          />
          <TextField
            type='date'
            name='deadline'
            value={deadline}
            onChange={handleChange}
            label='Deadline'
            InputLabelProps={{ shrink: true }}
          />
          <Button variant='contained' type='submit'>
            Add Project
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default ProjectForm;
