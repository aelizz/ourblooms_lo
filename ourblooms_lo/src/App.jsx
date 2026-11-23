import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router';
import './App.css'
import Home from './pages/Home.jsx'

function App(){
  return(
    <div>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/gallery" element={<h1>Gallery</h1>}/>
      </Routes>
    </div>
  )


}

export default App