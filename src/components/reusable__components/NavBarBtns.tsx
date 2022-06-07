import React, { ReactNode } from 'react'
import Menu__Btns__Array from '../utilities/Menu__Btns__Array'

const NavBarBtns: React.FC = () => {
    
    const Buttons__Element = Menu__Btns__Array.map(btn  => {
        return (
            <button>{btn.title}</button>
        )
    })
    
    return (
        <div className="nav__btns__container">
            {Buttons__Element}
        </div>

    )
}

export default NavBarBtns