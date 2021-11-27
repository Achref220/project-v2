import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <h2>Space<span>🌌</span>View</h2>
            </div>
            <div className="navs">
                <ul className="liContainer">
                    <Link className="link11" to="/"><li>Home</li></Link>
                    <Link className="link12" to="/news"><li>Collection</li></Link>
                    <Link className="link13" to="videos"><li>Videos</li></Link>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
