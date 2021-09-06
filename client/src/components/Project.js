const Project = ({ project }) => {
  return (
    <div>
      {project.name} {project.deadline}
    </div>
  );
};

export default Project;
