import './App.css'
import NavBar from './components/NavBar'
import HomeContent from './components/HomeContent'
import Expertise from './components/Expertise'
import Work from './components/Work'
import background from './assets/p1.jpg'
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

        <Expertise />

        <Work />
      </div>

    </div>

  )
}

export default App
