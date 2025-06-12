import './App.css'
import NavBar from './components/NavBar'
import HomeContent from './components/HomeContent'
import Expertise from './components/Expertise'
import Me from './components/Me'
import background from './assets/p1.jpg'
import ShowCase from "./components/ShowCase";
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "120vh",
      }}>
        <NavBar />

        <HomeContent />

        <Me />

        <Expertise />

        <ShowCase />

        <Contact />
      </div>

    </div>

  )
}

export default App
