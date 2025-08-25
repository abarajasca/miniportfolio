import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';
import './App.css'

function App() {
  
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">My Portfolio</Link>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">About Me</Link>
              <Link className="nav-link" to="/projects">Project Gallery</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
