import './App.css'
import MyInfo from './components/MyInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import CertificationsPage from './components/CertificationsPage'
import { useState } from 'react'

export default function App() {

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = section => {
      window.scrollTo(0,0);
      setActiveSection(section)
  };

  return (
    <div className="App">
      <nav className='NavigationBar'>
        <ul className='NavLinks'>
          <li><a href="#" onClick={() => handleSectionChange("home")}>Home</a></li>
          <li><a href="#" onClick={() => handleSectionChange("projects")}>Projects</a></li>
          <li><a href="#" onClick={() => handleSectionChange("certs")}>Certifications</a></li>
          <li><a href="#" onClick={() => handleSectionChange("contacts")}>Contact</a></li>
        </ul>
      </nav>
      <main>
        {activeSection === "home" && (
          <>
            <div className='InfoSection'><MyInfo /></div>
            <div className='ProjectsSection'><Projects /></div>
            <h4 className='ViewMoreProjects' onClick={() => handleSectionChange("projects")}>View more projects</h4>
            <div className='SkillsSection'><Skills /></div>
            <div className='ConnectSection'><Connect /></div>
          </>
        )}
        {activeSection === "projects" && (
          <div><ProjectsPage /></div>
        )}
        {activeSection === "certs" && (
          <div><CertificationsPage /></div>
        )}
        {activeSection === "contacts" && (
          <div className='ConnectSection' style={{ marginTop: "60px" }}><Connect /></div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}