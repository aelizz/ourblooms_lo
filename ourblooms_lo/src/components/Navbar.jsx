import i1 from '../assets/close.png'
import i2 from '../assets/hamburger.png'
import '../styles/Navbar.css'
import {NavLink} from 'react-router'
import { useState } from 'react'
import '../App.css'

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function toggle(){
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="navbar">
            <p className="display">Jannat</p>
            <div className="nav_items caption1"> 
                <button onClick={toggle} className="hamburger"> 
                {isMenuOpen? <img src={i2} alt="menu options"/>:<img src={i1} alt="close" />}
                </button> 
                <NavLink to="/">MENU</NavLink> 
                <NavLink to="/ order">ORDER</NavLink>
                <NavLink to="/ profile">PROFILE</NavLink>
            </div>
            

        </nav>
    )
}

export default Navbar