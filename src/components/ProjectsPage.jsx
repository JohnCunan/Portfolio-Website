import '../styles/ProjectsPage.css'

//Images
import LandingApp from '../images/landing_page_app.png'
import WeatherApp from '../images/weather_app.png'
import FaceRecApp from '../images/face_recognition_app.png'
import PayrollApp from '../images/payroll_app.png'
import BlogApp from '../images/blog_app.png'
import ColorApp from '../images/random_color_app.png'

import ProjectCard from './ProjectCard'

export default function ProjectsPage() {

    return(
        <div className='ProjectsSectionContainer'>
            <h2 className='Title'>Projects</h2>
            <p>A collection of projects I made throughout the years</p>

            {/* Projects Display */}
            <ProjectCard 
                ProjectImage={LandingApp}
                ProjectName="Epsorts Team Landing Page"
                ProjectDescription="A landing page of an esports team which features the team's roster, achivements, and matches."
                ProjectStack="ReactJS, Bootsrap, EmailJS"
                ProjectRepoLink="https://github.com/JohnCunan/practice_website"
                ProjectWebLink="https://psg-lgd-site.netlify.app/"
                IsWebsite={true}
            />

            <ProjectCard 
                ProjectImage={WeatherApp}
                ProjectName="Weather Forcast App"
                ProjectDescription="A weather forcast app where you can view the current weather information of a searched city."
                ProjectStack="Vanilla JavaScript, OpenWeatherAPI"
                ProjectRepoLink="https://github.com/JohnCunan/Weather-Forecast"
                ProjectWebLink="https://johncunan.github.io/Weather-Forecast/"
                IsWebsite={true}
            />

            <ProjectCard 
                ProjectImage={FaceRecApp}
                ProjectName="Attendance System Using Face Recognition"
                ProjectDescription="A capstone project which records the attendance of recognized employees to a payroll system."
                ProjectStack="Python, SQL, OpenCV, Tkinter"
                ProjectRepoLink="https://github.com/JohnCunan/Face-Recognition-Attendance-System"
                ProjectWebLink=""
                IsWebsite={false}
            />

            <ProjectCard 
                ProjectImage={PayrollApp}
                ProjectName="Payroll System"
                ProjectDescription="A capstone project which calculates salaries, manages employees and produces reports."
                ProjectStack="C#, SQL"
                ProjectRepoLink="https://github.com/JohnCunan/FionasFarmResortAdmin"
                ProjectWebLink=""
                IsWebsite={false}
            />

            <ProjectCard 
                ProjectImage={BlogApp}
                ProjectName="Blog website"
                ProjectDescription="A simple responsive blog website about gaming which displays random blogs."
                ProjectStack="Vanilla JavaScript, HTML, CSS"
                ProjectRepoLink="https://github.com/JohnCunan/Blog-Website"
                ProjectWebLink="https://johncunan.github.io/Blog-Website/"
                IsWebsite={true}
            />

            <ProjectCard 
                ProjectImage={ColorApp}
                ProjectName="Random Hex Color Code Generator"
                ProjectDescription="A simple website that generates a random hex color code and allows you to copy the code on the clipboard."
                ProjectStack="Vanilla JavaScript, HTML, CSS"
                ProjectRepoLink="https://github.com/JohnCunan/HexCodeGenerator"
                ProjectWebLink="https://johncunan.github.io/HexCodeGenerator/"
                IsWebsite={true}
            />

        </div>
    )
}