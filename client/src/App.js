import { useEffect, useState } from 'react';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import projectService from './services/project';

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const data = await projectService.getAll();
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Container>
      <Typography variant='h1'>Just do it!</Typography>
      <ProjectForm projects={projects} setProjects={setProjects} />
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </Container>
  );
}

export default App;
