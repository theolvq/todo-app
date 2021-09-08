import { useEffect, useState } from 'react';
import axios from 'axios';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get('/api/projects');
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
