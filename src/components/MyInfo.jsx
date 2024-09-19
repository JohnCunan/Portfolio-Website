import '../styles/MyInfo.css'
import ProfilePic from '../../public/profile_pic.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function MyInfo() {
  return (
    <div className='MyInfoContainer'>
        <div className='PersonalInfo'>
            <h1>ULYSSES JOHN CUNAN</h1>
            <h2>Software Developer</h2>
            <p>
              Hi! I'm a BSIT graduate, I am an eager learner and collaborative team 
              player with a passion for embracing new challenges. Currently working as a
              Jr. IT Specialist for a large sized company. 
            </p>
            {/* <h4>
              <a 
                href='https://drive.google.com/file/d/1YsFVD6GYeCZNEnMsmuM3JHUv7qC3lJ8A/view?usp=sharing' 
                target={'_blank'}>
                VIEW MY RESUME 
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}><OpenInNewIcon /></span>
              </a>
            </h4> */}
        </div>
        <img src={ProfilePic} />
    </div>
  )
}
