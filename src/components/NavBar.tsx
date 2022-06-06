import React from "react";
// import NavBarBtns from './reusable__components/NavBarBtns'
// import Menu__Btns from './utilities/Menu__Btns'



const NavBar: React.FC = () => {

    const Menu__Btns__Element = () => <h1>Menu Btn Element</h1>

    return(
        <nav className="nav__container">
            {Menu__Btns__Element}
        </nav>

    )
}

export default NavBar