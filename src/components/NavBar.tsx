import React from "react";
import { Link, /*animateScroll as scroll*/ } from "react-scroll"; //https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react


const NavBar: React.FC = () => {

    return(
        <nav className="nav__container">
            <h1>Gleb Tc</h1>
            <ul className="nav__links__container">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                >
                    <li className="nav__link">Home</li>
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                >
                    <li className="nav__link">About</li>
                </Link>

                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                >
                    <li className="nav__link">Portfolio</li>
                </Link>
                
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                >
                    <li className="nav__link">Contact</li>
                </Link>
            </ul>
        </nav>

    )
}

export default NavBar