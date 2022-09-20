import {useState} from 'react';
import themeToggler from './ThemeToggler';

const DarkModeButton = () => {


    const [darkTheme, setDarkTheme] = useState(true);

        const toggleTheme = () => {
            themeToggler(darkTheme, setDarkTheme);
        }
    return (
        <>
            <input type="checkbox" id="darkmode__button" />
            <label onClick={toggleTheme} id="toggle__label"htmlFor="darkmode__button">
                <img src="sun-svgrepo-com.svg" alt="" />
            </label>
        </>
    )
}

export default DarkModeButton