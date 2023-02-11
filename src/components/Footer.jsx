import '../styles/Footer.css'


export default function Footer() {
  return (
    <div className='FooterSectionContainer'>
        <div className='NavlinksContainer'>
            <ul className='NavLinks'>
                <li><a href="#">Home</a></li>
                <li><a href="https://github.com/JohnCunan" target={'_blank'}>Github</a></li>
            </ul>
        </div>
        <div className='ContactsContainer1'>
            <ul className='NavLinks'>
                
                <li><a href="https://www.facebook.com/John.Cunan.E07/" target={'_blank'}>Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/john-cunan-b46793228/" target={'_blank'}>LinkedIn</a></li>
            </ul>
        </div>
        <div className='ContactsContainer2'>
            <ul className='NavLinks'>
                <li><a href="#" target={'_blank'}>Discord</a></li>
                <li><a href="https://www.reddit.com/user/Rikonama" target={'_blank'}>Reddit</a></li>
            </ul>
        </div>
    </div>
  )
}

