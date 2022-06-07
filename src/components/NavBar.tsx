import React from "react";
import NavBarBtns from './reusable__components/NavBarBtns'




const NavBar: React.FC = () => {

    const Title = () => <h1>Gleb Tc</h1>

    const Menu__Btns__Element = () => {
        
        return (
            <NavBarBtns />
        )
    }

    return(
        <nav className="nav__container">
            {Title()}
            {Menu__Btns__Element()}
        </nav>

    )
}

export default NavBar