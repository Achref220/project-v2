import React from 'react';
import { Parallax } from 'react-parallax';
import './content.css'
import NavBar from './NavBar';
import vid5 from '../images/vid5.mp4'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Parallax className="image1">
            <NavBar />
            <div className="container22">
            <video className="vid5" autoPlay loop muted width="100%" >
                <source src={vid5} type="video/mp4" />
            </video>
            <div className="content1">
                <h1 data-text="spaceview" className="img-txt">spaceview</h1><br />
            </div>
            <div className="des1">
                <p> EXPLORE THE UNIVERSE WITH INTERACTIVES AND VIDEOS </p>
                <Link className="link1" to="/Login"><h4>Login 🗝️</h4></Link>
            </div>
            <Link className="link2" to="/AccountRequest"><h4 className="req1">create an account</h4></Link>
            </div>
        </Parallax>
    )
}

export default Header
