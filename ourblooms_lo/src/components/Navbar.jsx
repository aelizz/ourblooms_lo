import i1 from '../assets/close.png'
import i2 from '../assets/hamburger.png'
import '../styles/Navbar.css'
import {NavLink} from 'react-router'
import { useState } from 'react'

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function toggle(){
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="navbar">
            <p>Our Blooms</p>
            <div className="nav_items"> 
                <button onClick={toggle} className="hamburger">
                {isMenuOpen? <img src={i2} alt="menu options"/>:<img src={i1} alt="close" />}
                </button>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ about">About</NavLink>
                <NavLink to="/ gallery">Gallery</NavLink>
                <NavLink to="/ menu">Menu</NavLink>
            </div>
            

        </nav>
    )
}

export default Navbar