import React, { useState } from 'react'
import logo from "../../assets/ProHire1.png"
import "./navbar.css"

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }
  return (
    <>
    <nav>
        <a href="index.html"><img src={logo} alt="" srcset="" /></a>

        <div>
            <ul id='navbar' className={showMenu?"#navbar active": "#navbar"}>
                <li><a className='active' href="#home">Home</a></li>
                <li><a href="#company">Companies</a></li>
                <li><a href="#job">About</a></li>
                <li><a href="#slider">Success Stories</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div id="mobile">
        <i id="bar"className= {showMenu?'bx bxs-x-circle':'bx bx-menu-alt-right' } onClick={handleClick}></i>
        </div>

    </nav>
    </>
  )
}
