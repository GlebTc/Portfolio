import NavBar from "./components/NavBar"
import Home from './components/Home'
import About from './components/About'


function App(): JSX.Element {

  const Main__Display__Element = () => {
    return (
      <>
        <NavBar />
        <Home />
        <About />
      </>
    )
  }

  window.onscroll = () => {
      
  }

  

  return (
    <>
      {Main__Display__Element}
    </>
  )
}

export default App;
