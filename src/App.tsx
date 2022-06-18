import NavBar from './components/NavBar'
import Home from './components/pages__components/Home'
import About from './components/pages__components/About'




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
    </>
  )
}

export default App;
