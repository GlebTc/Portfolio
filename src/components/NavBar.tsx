import React from "react";


const NavBar: React.FC = () => {

    return(
        <nav className="nav__container">
            <h1>Gleb Tc</h1>
            <div className="nav__btns__container">
                <button>Home</button>
                <button>About</button>
                <button>Portfolio</button>
                <button>Contact</button>
            </div>
        </nav>

    )
}

export default NavBar