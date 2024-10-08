import '../styles/Skills.css'

//icons
import logoReact from '../images/logo_react.png'
import logoPython from '../images/logo_python.png'
import logoCsharp from '../images/logo_csharp.png'
import logoJava from '../images/logo_java.png'
import logoJavasript from '../images/logo_javascript.png'
import logoCss from '../images/logo_css.png'
import logoHtml from '../images/logo_html.png'
import logoBootstrap from '../images/logo_bootstrap.png'
import logoSql from '../images/logo_sql.png'
import logoFigma from '../images/logo_figma.png'
import logoPhotoshop from '../images/logo_photoshop.png'
import logoPhp from '../images/logo_php.png'

import logoAD from '../images/logo_ad.png'
import logoMui from '../images/logo_mui.png'
import logoZabbix from '../images/logo_zabbix.png'
import logoMsAd from '../images/logo_msad.png'

export default function Skills() {
    return (
        <div className='SkillsSectionContainer'>
            <h2>Skills</h2>
            <div className='SkillIconContainer'>
                <img src={logoHtml} />
                <img src={logoCss} />
                <img src={logoJavasript} />
                <img src={logoBootstrap} />
                <img src={logoReact} />
                <img src={logoJava} />
                <img src={logoCsharp} />
                <img src={logoPython} />
                <img src={logoSql} />
                <img src={logoPhp} />
                <img src={logoFigma} />
                <img src={logoPhotoshop} />

                <img src={logoAD} />
                <img src={logoMui} />
                <img src={logoZabbix} />
                <img src={logoMsAd} />
            </div>
        </div>
    )
}