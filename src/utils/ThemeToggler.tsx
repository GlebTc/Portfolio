
const themeToggler = (darkTheme: boolean, setDarkTheme: any) => {  

    // First option is the dark mode

    setDarkTheme(!darkTheme);
    darkTheme ?
        document.documentElement.style.setProperty ('--BGC__Primary', "rgba(27, 33, 37, 0.8)") : 
        document.documentElement.style.setProperty ('--BGC__Primary', "rgba(144, 175, 197, 0.2)");
    darkTheme ?
        document.documentElement.style.setProperty ('--BGC__Secondary', "rgba(18, 34, 44, 0.4)") : document.documentElement.style.setProperty ('--BGC__Secondary', "rgba(144, 175, 197, 0.4)");
    darkTheme ?
        document.documentElement.style.setProperty ('--BGC__Section', "rgba(27, 33, 37, 0.8)") : document.documentElement.style.setProperty ('--BGC__Section', "rgba(107, 125, 125, 1)");
    darkTheme ?
        document.documentElement.style.setProperty ('--Icons', "rgba(148, 238, 148, 1)") : // Brighter Green
        document.documentElement.style.setProperty ('--Icons', "rgba(12, 76, 12, 0.7)");
    darkTheme ?
        document.documentElement.style.setProperty ('--Highlight', "rgb(16, 39, 16)") :
        document.documentElement.style.setProperty ('--Highlight', "rgba(166, 216, 212, 1)");
    darkTheme ?
        document.documentElement.style.setProperty ('--Text', "rgba(255, 255, 255, 0.8)") :
        document.documentElement.style.setProperty ('--Text', "rgba(166, 216, 212, 1)");
    darkTheme ?
        document.documentElement.style.setProperty ('--Btn__BGC', "rgba(44, 206, 44, 0.5)") :
        document.documentElement.style.setProperty ('--Btn__BGC', "rgba(12, 76, 12, 0.7)");
    darkTheme ?
        document.documentElement.style.setProperty ('--Active__Text', "rgba(148, 238, 148, 1)") :
        document.documentElement.style.setProperty ('--Active__Text', "rgba(12, 76, 12, 0.8)");
    darkTheme ?
        document.documentElement.style.setProperty ('.portfolio__gallery__item h2', "rgba(148, 238, 148, 1)") :
        document.documentElement.style.setProperty ('.portfolio__gallery__item h2', "rgba(166, 216, 212, 1)");
}

export default themeToggler;