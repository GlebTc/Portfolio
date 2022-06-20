import NavBar from './components/NavBar'
import Home from './components/pages__components/Home'
import About from './components/pages__components/About'
import Portfolio from './components/pages__components/Portfolio'
import Contact from './components/pages__components/Contact'





function App(): JSX.Element {
  return (
    <>
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
    </>
  )
}

export default App;
