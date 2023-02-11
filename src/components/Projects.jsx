import '../styles/Projects.css'

//Images
import LandingApp from '../images/landing_page_app.png'
import WeatherApp from '../images/weather_app.png'
import FaceRecApp from '../images/face_recognition_app.png'

//Icons
import GitHubIcon from '../images/github.png'
import LinkIcon from '../images/link.png'

export default function Projects() {
    return(
        <div className='ProjectsSectionContainer'>
            <h2>Featured Projects</h2>
            {/* Projects Display */}
            <div className='ProjectContainer'>
                <img src={LandingApp} />
                <div className='ProjectDescription'>
                    <h3>Epsorts Team Landing Page</h3>
                    <p>A landing page of an esports team which features the team's roster, achivements, and matches.</p>
                    <h4>ReactJS, Bootsrap, EmailJS</h4>
                </div>
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/practice_website" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://psg-lgd-site.netlify.app/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <img src={WeatherApp} />
                <div className='ProjectDescription'>
                    <h3>Weather Forcast App</h3>
                    <p>A weather forcast app where you can view the current weather information of a searched city.</p>
                    <h4>Vanilla JavaScript, OpenWeatherAPI</h4>
                </div>
                <div className='ProjectLinks'>
                    <a href="https://github.com/JohnCunan/Weather-Forecast" target={'_blank'}><img src={GitHubIcon}></img></a>
                    <a href="https://johncunan.github.io/Weather-Forecast/" target={'_blank'}><img src={LinkIcon}></img></a>
                </div>
            </div>

            <div className='ProjectContainer'>
                <img src={FaceRecApp} />
                <div className='ProjectDescription'>
                    <h3>Attendance System Using Face Recognition</h3>
                    <p>A capstone project which records the attendance of recognized employees to a payroll system.</p>
                    <h4>Python, SQL, OpenCV, Tkinter</h4>
                </div>
                <div className='ProjectLinks'>
                    <a href='https://github.com/JohnCunan/Face-Recognition-Attendance-System' target={'_blank'}><img src={GitHubIcon}></img></a>
                </div>
            </div>
        </div>
    )
}