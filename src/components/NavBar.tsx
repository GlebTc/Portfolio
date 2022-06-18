import React from "react";
import { Link, animateScroll as scroll } from "react-scroll"; //https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react


const NavBar: React.FC = () => {

    return(
        <nav className="nav__container">
            <h1>Gleb Tc</h1>
            <ul className="nav__btns__container">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <li className="nav__btn">Home</li>
                </Link>

                <Link
                
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <li className="nav__btn">About</li>
                </Link>

                <li className="nav__btn">Portfolio</li>
                
                <li className="nav__btn">Contact</li>
            </ul>
        </nav>

    )
}

export default NavBar