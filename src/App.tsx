import NavBar from './components/NavBar'
import Home from './components/pages__components/Home'
import About from './components/pages__components/About'
import Portfolio from './components/pages__components/Portfolio'
import Contact from './components/pages__components/Contact'





function App(): JSX.Element {

  // Scroll event listener accesses :root properties from the styles and modifies them based on the Y position of the scroll.
  window.addEventListener ('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 50) {
      document.documentElement.style.setProperty('--NavBar__Display', 'none')
    } else {
      document.documentElement.style.setProperty('--NavBar__Display', 'flex')
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
