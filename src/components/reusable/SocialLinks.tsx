import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {

    const resumeLink = "https://www.dropbox.com/s/9ndoub69qkjfk0d/Gleb%20Tchani%20-%20Resume.pdf?dl=0"

    return (
        <>

            <li className="nav__side__link"><a href={resumeLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFilePdf} /></a></li>  
            <li className="nav__side__link"><a href="https://www.linkedin.com/in/glebtc/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="nav__side__link"><a href="https://github.com/GlebTc" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li className="nav__side__link"><a href="mailto:gleb.tchani@gmail.com" rel="noreferrer"><FontAwesomeIcon icon={faAt} /></a></li>
            <li className="nav__side__link"><a href="tel:+19057304227" rel="noreferrer"><FontAwesomeIcon icon={faPhone} /></a></li> 
        </>
    )
}

export default SocialLinks;