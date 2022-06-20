import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './components/pages__components/Home'
import About from './components/pages__components/About'
import Portfolio from './components/pages__components/Portfolio'
import Contact from './components/pages__components/Contact'





function App(): JSX.Element {

  let NavbarAppearance: string

  useEffect(()=> {
    NavbarAppearance = getComputedStyle(document.documentElement).getPropertyValue('--NavBar__Appearance')
  }, [])

  const navContainer = document.querySelector('nav__container')

  window.addEventListener ('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 50) {
      document.documentElement.style.setProperty('--NavBar__Appearance', 'rgba(207, 189, 107, 0.2)')
    } else {
      document.documentElement.style.setProperty('--NavBar__Appearance', 'rgba(207, 189, 107, 1)')
    }
  })

  return (
    <div className="main__container">
        <NavBar />
        <Home 
          title = "Home"
          id="home"
        />
        <About 
          title = "About"
          id="about"
        />
        <Portfolio 
          title = "Portfolio"
          id="portfolio"
        />
        <Contact 
          title = "Contact"
          id="contact"
        />
    </div>
  )
}

export default App;
