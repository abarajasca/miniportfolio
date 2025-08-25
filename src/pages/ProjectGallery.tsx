import projectsData from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectGallery() {
  const projects: Project[] = projectsData;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Project Gallery</h1>
      <p className="lead mb-5">Here are my projects and work samples.</p>
      
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-lg-6 col-md-12 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={project.imageUrl} 
                className="card-img-top" 
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                
                <div className="mb-3">
                  <h6>Technologies:</h6>
                  <div>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-2 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="btn btn-outline-primary me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;