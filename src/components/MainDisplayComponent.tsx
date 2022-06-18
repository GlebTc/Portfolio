import NavBar from "./NavBar"
import Home from './pages__components/Home'
import About from './pages__components/About'

const MainDisplayElement: React.FC = () => {
    return (
      <>
        <NavBar />
        <Home />
        <About />
      </>
    )
  }

export default MainDisplayElement

