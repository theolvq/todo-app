import { useState } from 'react';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div>
      <h1>Just do it!</h1>
      <ProjectForm projects={projects} setProjects={setProjects} />
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </div>
  );
}

export default App;
