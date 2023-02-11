import '../styles/CertificationsPage.css'

import cert1 from "../images/c1.png"
import cert2 from "../images/c2.png"
import cert3 from "../images/c3.png"
import cert4 from "../images/c4.png"
import cert5 from "../images/c5.png"


export default function CertificationsPage() {
  return (
    <div className='CertificationsPageContainer'>
        <h2>Certifications</h2>
        <p>Certifications I earned throughout the years</p>
        <div className='CertsContainer'>
            <img src={cert1}></img>
            <img src={cert2}></img>
            <img src={cert3}></img>
            <img src={cert4}></img>
            <img src={cert5}></img>
        </div>
    </div>
  )
}
