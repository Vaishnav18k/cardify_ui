
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Feature from './Pages/Services'
import Marketplace from './Pages/Features'
import Contact from './Pages/Contact'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Feature" element={<Feature />} />
      <Route path="/Marketplace" element={<Marketplace />} />

      <Route path="/Contact" element={<Contact   />} />
    </Routes>
   </Router>
     
    </>
  )
}

export default App
