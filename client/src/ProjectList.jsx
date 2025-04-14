
  export default function ProjectList({ projects }) {
    const pList = projects.length ? (
      projects.map(p => (
        <div key={p.id} className="project-item">
          {p.content}
        </div>
      ))
    ) : (
      <p className="no-projects">No Projects left</p>
    );
    
    return <div className="project-container">{pList}</div>;
  }
  

  //================================================================================
   // delete on click
   //================================================================================

// Delete-Enabled Project List (Named Export)
export function DeleteFromList({ projects, deleter }) {
  if (!projects.length) return <p className="no-projects">No Projects left</p>;

  return (
    <div className="project-container">
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <span>{project.content}</span>
          <span
            className="project-delete"
            onClick={() => deleter(project.id)}
          >
            ❌
          </span>
        </div>
      ))}
    </div>
  );
}