import { useState } from 'react';

const ProjectForm = ({ projects, setProjects }) => {
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState('');

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
      { id, name: projectName, deadline, toDos: [] },
    ]);
    setProjectName('');
    setDeadline('');
  };

  return (
    <div>
      <h2>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='projectName'
          value={projectName}
          onChange={handleChange}
        />
        <input
          type='date'
          name='deadline'
          value={deadline}
          onChange={handleChange}
        />
        <button type='submit'>Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
