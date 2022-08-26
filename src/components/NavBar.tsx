import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faSuitcase, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Link, /*animateScroll as scroll*/ } from "react-scroll"; //https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

import SocialLinks from "./reusable/SocialLinks";


const NavBar: React.FC = () => {
    const [theme, setTheme] = useState<string>("");

    const handleChange = (event: any) => {
        event.preventDefault();
        setTheme(event.target.id);
    }

    if (theme === "theme_1"){
        document.documentElement.style.setProperty('--BGC__Primary', 'rgba(92, 41, 231, 0.2)')
        document.documentElement.style.setProperty('--BGC__Secondary', 'rgba(92, 41, 231, 0.4)')
        document.documentElement.style.setProperty('--BGC__Section', 'rgb(105, 115, 204)')
        document.documentElement.style.setProperty('--Highlight', 'rgba(0, 255, 255, 0.6)')
        document.documentElement.style.setProperty('--Icons', 'rgb(18, 67, 122)')
        document.documentElement.style.setProperty('--Text__Primary', 'rgb(18, 67, 122)')
        document.documentElement.style.setProperty('--Active', 'rgba(13, 110, 253, 1)')
        document.documentElement.style.setProperty('--Btn__BGC', 'rgb(105, 115, 204)')   
        document.documentElement.style.setProperty('--NavBar__Display', 'rgba(92, 41, 231, 0.6)')
    } else if (theme === "theme_2"){
        document.documentElement.style.setProperty('--BGC__Primary', 'rgba(144, 175, 197, 0.2)')
        document.documentElement.style.setProperty('--BGC__Secondary', 'rgba(144, 175, 197, 0.4)')
        document.documentElement.style.setProperty('--BGC__Section', 'rgba(107, 125, 125, 1)')
        document.documentElement.style.setProperty('--Highlight', 'rgba(166, 216, 212, 1)')
        document.documentElement.style.setProperty('--Icons', 'rgba(41, 133, 26, 1)')
        document.documentElement.style.setProperty('--Text__Primary', 'rgba(215, 218, 229, 1)')
        document.documentElement.style.setProperty('--Active', 'rgba(41, 133, 26, 1)')
        document.documentElement.style.setProperty('--Btn__BGC', 'rgba(41, 133, 26, 1)') 
        document.documentElement.style.setProperty('--NavBar__Display', 'rgba(107, 125, 125, 0.6)')
    } else if (theme === "theme_3"){
        document.documentElement.style.setProperty('--BGC__Primary', 'rgba(170, 161, 200, 0.2)')
        document.documentElement.style.setProperty('--BGC__Secondary', 'rgba(170, 161, 200, 0.4')
        document.documentElement.style.setProperty('--BGC__Section', 'rgba(150, 122, 161, 1)')
        document.documentElement.style.setProperty('--Highlight', 'rgba(245, 230, 232, 1)')
        document.documentElement.style.setProperty('--Icons', 'rgba(129, 30, 152, 1)')
        document.documentElement.style.setProperty('--Text__Primary', 'rgba(215, 218, 229, 1)')
        document.documentElement.style.setProperty('--Active', 'rgba(129, 30, 152, 1)')
        document.documentElement.style.setProperty('--Btn__BGC', 'rgba(129, 30, 152, 1)') 
        document.documentElement.style.setProperty('--NavBar__Display', 'rgba(150, 122, 161, 0.6)')        
    }

    return(
        <>
{/* -------------------------------Start Main NavBar------------------------------- */}
        <nav className="nav__container">
        <DropdownButton id="dropdown-item-button" title="Themes" >
            <Dropdown.Item onClick={handleChange} id="theme_1" as="button">Theme 1</Dropdown.Item>
            <Dropdown.Item onClick={handleChange} id="theme_2" as="button">Theme 2</Dropdown.Item>
            <Dropdown.Item onClick={handleChange} id="theme_3" as="button">Theme 3</Dropdown.Item>
        </DropdownButton>

            <ul className="nav__social__links">
                <SocialLinks />          
            </ul>
            <ul className="nav__links__container">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-55}
                >
                    <li className="nav__link">Home</li>
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-55}
                >
                    <li className="nav__link">About</li>
                </Link>

                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-55}
                >
                    <li className="nav__link">Portfolio</li>
                </Link>
                
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-55}
                >
                    <li className="nav__link">Contact</li>
                </Link>
            </ul>
        </nav>
{/* -------------------------------END Main NavBar------------------------------- */}



{/* -------------------------------START Side NavBar------------------------------- */}
        <nav className="nav__right__side__container nav__side__container__display">
            <ul className="nav__links__right__side__container">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={0}
                >                
                <img src="portrait.png" alt="Gleb Tchani" id="portrait"/>
                </Link>


                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={0}
                >
                    <li className="nav__side__link"><FontAwesomeIcon icon={faHouse} /></li>
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={0}
                >
                    <li className="nav__side__link"><FontAwesomeIcon icon={faUser} /></li>
                </Link>

                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={0}
                >
                    <li className="nav__side__link"><FontAwesomeIcon icon={faSuitcase} /></li>
                </Link>
                
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={0}
                >
                    <li className="nav__side__link"><FontAwesomeIcon icon={faAddressCard} /></li>
                </Link>
            </ul>
        </nav>
{/* -------------------------------END Side NavBar-------------------------------*/}



{/* -------------------------------START Left Side Links------------------------------- */}
        <nav className="nav__left__side__container links__side__container__display">
            <ul className="nav__links__left__side__container">
                <SocialLinks />            
            </ul>
        </nav>
{/* -------------------------------End Left Side Links------------------------------- */}
        </>
    )
}

export default NavBar