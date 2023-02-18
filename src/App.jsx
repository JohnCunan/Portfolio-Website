import './App.css'
import MyInfo from './components/MyInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import CertificationsPage from './components/CertificationsPage'
import { useState } from 'react'

// Material UI
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function App() {

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = section => {
      window.scrollTo(0,0);
      setActiveSection(section)
  };

  // Nav Menu Functions
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <div className='NavMenu'>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleSectionChange("home")}>Home</MenuItem>
              <MenuItem onClick={() => handleSectionChange("projects")}>Projects</MenuItem>
              <MenuItem onClick={() => handleSectionChange("certs")}>Certifications</MenuItem>
              <MenuItem onClick={() => handleSectionChange("contacts")}>Contact</MenuItem>
            </Menu>
          </div>
      </nav>
      <main>
        {activeSection === "home" && (
          <>
            <div className='InfoSection'><MyInfo /></div>
            <div className='ProjectsSection'><Projects /></div>
            <h4 className='ViewMoreProjects' 
              onClick={() => handleSectionChange("projects")}>View more projects
              <span 
                style={{ verticalAlign: 'middle', 
                display: 'inline-block', 
                marginLeft: '10px',
                marginTop: '2px' }}>
                <ReadMoreIcon />
              </span>
            </h4>
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
      <footer className='MainFooterContainer'>
        <Footer />
        <p>Made with 🔥 by Ulysses John Cunan</p>
      </footer>
    </div>
  )
}