import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <h2>space🌌view</h2>
            </div>
            <div className="navs">
                <ul className="liContainer">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
