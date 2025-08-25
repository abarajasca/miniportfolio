function AboutMe() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <img 
              src="/images/profile-photo.jpg" 
              alt="Profile" 
              className="rounded-circle mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h1 className="display-4 mb-3">About Me</h1>
            <p className="lead text-muted">Full Stack Developer | Problem Solver | Technology Enthusiast</p>
          </div>

          <div className="card shadow-sm mb-5">
            <div className="card-body p-4">
              <h2 className="card-title h4 mb-3">Hello, I'm John Doe</h2>
              <p className="card-text mb-3">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                dynamic web applications and solving complex technical challenges. I love turning 
                ideas into reality through clean, efficient code and user-centered design.
              </p>
              <p className="card-text mb-3">
                My journey in software development started during my Computer Science studies, 
                where I discovered my passion for creating digital solutions that make a real 
                impact. I enjoy working with modern technologies and am always eager to learn 
                new frameworks and tools.
              </p>
              <p className="card-text">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical blog posts and 
                community meetups.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">
                    <i className="bi bi-code-slash text-primary me-2"></i>
                    Technical Skills
                  </h3>
                  <div className="mb-3">
                    <h6>Frontend</h6>
                    <div className="d-flex flex-wrap gap-1 mb-2">
                      <span className="badge bg-primary">React</span>
                      <span className="badge bg-primary">TypeScript</span>
                      <span className="badge bg-primary">JavaScript</span>
                      <span className="badge bg-primary">HTML5</span>
                      <span className="badge bg-primary">CSS3</span>
                      <span className="badge bg-primary">Bootstrap</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>Backend</h6>
                    <div className="d-flex flex-wrap gap-1 mb-2">
                      <span className="badge bg-success">Node.js</span>
                      <span className="badge bg-success">Express</span>
                      <span className="badge bg-success">Python</span>
                      <span className="badge bg-success">REST APIs</span>
                    </div>
                  </div>
                  <div>
                    <h6>Database & Tools</h6>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-warning">MongoDB</span>
                      <span className="badge bg-warning">PostgreSQL</span>
                      <span className="badge bg-warning">Git</span>
                      <span className="badge bg-warning">Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">
                    <i className="bi bi-person-badge text-info me-2"></i>
                    Experience
                  </h3>
                  <div className="mb-3">
                    <h6 className="mb-1">Frontend Developer</h6>
                    <p className="text-muted small mb-1">TechCorp Solutions • 2022 - Present</p>
                    <p className="small">
                      Developing responsive web applications using React and TypeScript, 
                      collaborating with cross-functional teams to deliver high-quality products.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Junior Full Stack Developer</h6>
                    <p className="text-muted small mb-1">StartupXYZ • 2021 - 2022</p>
                    <p className="small">
                      Built and maintained web applications using MEAN stack, implemented 
                      new features and resolved technical issues.
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-1">Web Development Intern</h6>
                    <p className="text-muted small mb-1">Digital Agency • 2021</p>
                    <p className="small">
                      Assisted in developing client websites, learned best practices in 
                      web development and project management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">
                    <i className="bi bi-mortarboard text-success me-2"></i>
                    Education
                  </h3>
                  <div>
                    <h6 className="mb-1">Bachelor of Computer Science</h6>
                    <p className="text-muted small mb-1">University of Technology • 2018 - 2022</p>
                    <p className="small">
                      Graduated with honors. Focused on software engineering, database systems, 
                      and web technologies. Senior project: E-commerce platform with React and Node.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">
                    <i className="bi bi-heart text-danger me-2"></i>
                    Interests
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">🚀 Exploring new technologies and frameworks</li>
                    <li className="mb-2">📝 Writing technical blogs and tutorials</li>
                    <li className="mb-2">🎮 Gaming and game development</li>
                    <li className="mb-2">📚 Reading tech books and staying updated</li>
                    <li className="mb-2">🌱 Contributing to open-source projects</li>
                    <li>🏃‍♂️ Running and outdoor activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-5">
            <div className="card-body text-center">
              <h3 className="card-title h5 mb-3">Let's Connect!</h3>
              <p className="card-text mb-3">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss a project or just chat about technology!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="mailto:john.doe@example.com" className="btn btn-outline-primary">
                  <i className="bi bi-envelope me-1"></i> Email
                </a>
                <a href="https://linkedin.com/in/johndoe" className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin me-1"></i> LinkedIn
                </a>
                <a href="https://github.com/johndoe" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
                <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-download me-1"></i> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default AboutMe;