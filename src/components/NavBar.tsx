import React from "react";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faSuitcase, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Link, /*animateScroll as scroll*/ } from "react-scroll"; //https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

import SocialLinks from "./reusable/SocialLinks";


const NavBar: React.FC = () => {



    return(
        <>
{/* -------------------------------Start Main NavBar------------------------------- */}
        <nav className="nav__container">
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
                    smooth={true}                    duration={200}
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