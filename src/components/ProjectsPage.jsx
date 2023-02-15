import '../styles/ProjectsPage.css'

//Images
import LandingApp from '../images/landing_page_app.png'
import WeatherApp from '../images/weather_app.png'
import FaceRecApp from '../images/face_recognition_app.png'
import PayrollApp from '../images/payroll_app.png'
import BlogApp from '../images/blog_app.png'
import ColorApp from '../images/random_color_app.png'

//Icons
import GitHubIcon from '../images/github.png'
import LinkIcon from '../images/link.png'

export default function ProjectsPage() {
    return(
        <div className='ProjectsSectionContainer'>
            <h2 className='Title'>Projects</h2>
            <p>A collection of projects I made throughout the years</p>

            {/* Projects Display */}
            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={LandingApp} />
                    <div className='ProjectDescription'>
                        <h3>Epsorts Team Landing Page</h3>
                        <p>A landing page of an esports team which features the team's roster, achivements, and matches.</p>
                        <h4>ReactJS, Bootsrap, EmailJS</h4>
                    </div>
                </div>
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/practice_website" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://psg-lgd-site.netlify.app/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={WeatherApp} />
                    <div className='ProjectDescription'>
                        <h3>Weather Forcast App</h3>
                        <p>A weather forcast app where you can view the current weather information of a searched city.</p>
                        <h4>Vanilla JavaScript, OpenWeatherAPI</h4>
                    </div>
                </div>
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/Weather-Forecast" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://johncunan.github.io/Weather-Forecast/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={FaceRecApp} />
                    <div className='ProjectDescription'>
                        <h3>Attendance System Using Face Recognition</h3>
                        <p>A capstone project which records the attendance of recognized employees to a payroll system.</p>
                        <h4>Python, SQL, OpenCV, Tkinter</h4>
                    </div>
                </div>
                <div className='ProjectLinks'>
                    <a href='https://github.com/JohnCunan/Face-Recognition-Attendance-System' target={'_blank'}><img src={GitHubIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={PayrollApp} />
                    <div className='ProjectDescription'>
                        <h3>Payroll System</h3>
                        <p>A capstone project which calculates salaries, manages employees and produces reports.</p>
                        <h4>C#, SQL</h4>
                    </div>
                </div>
                <div className='ProjectLinks'>
                    <a href='https://github.com/JohnCunan/FionasFarmResortAdmin' target={'_blank'}><img src={GitHubIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={BlogApp} />
                    <div className='ProjectDescription'>
                        <h3>Blog website</h3>
                        <p>A simple responsive blog website about gaming which displays random blogs.</p>
                        <h4>Vanilla JavaScript, HTML, CSS</h4>
                    </div>
                </div>
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/Blog-Website" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://johncunan.github.io/Blog-Website/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <div className='MainProjectContent'>
                    <img src={ColorApp} />
                    <div className='ProjectDescription'>
                        <h3>Random Hex Color Code Generator</h3>
                        <p>A simple website that generates a random hex color code and allows you to copy the code on the clipboard.</p>
                        <h4>Vanilla JavaScript, HTML, CSS</h4>
                    </div>
                </div>
                
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/HexCodeGenerator" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://johncunan.github.io/HexCodeGenerator/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>
            
        </div>
    )
}