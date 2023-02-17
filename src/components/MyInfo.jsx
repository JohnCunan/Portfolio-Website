import '../styles/MyInfo.css'
import ProfilePic from '../../public/profile_pic.png'

export default function MyInfo() {
  return (
    <div className='MyInfoContainer'>
        <div className='PersonalInfo'>
            <h1>ULYSSES JOHN CUNAN</h1>
            <h2>Front-End Developer</h2>
            <p>
              I'm a 4th year BSIT College student that is eager to learn and collaborate 
              with a love for learning new things 
              and making websites look awesome.
            </p>
            <h4>
              <a 
                href='https://drive.google.com/file/d/1rlbcjeW1yk5xE3AL7f5e-udMBmp2Zt1x/view?usp=sharing' 
                target={'_blank'}>
                VIEW MY RESUME
              </a>
            </h4>
        </div>
        <img src={ProfilePic} />
    </div>
  )
}
