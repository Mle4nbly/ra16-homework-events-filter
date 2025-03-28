function ProjectList({ projects }) {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
