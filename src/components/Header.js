import React from 'react';
import { Parallax } from 'react-parallax';
import './content.css'
import NavBar from './NavBar';

const Header = () => {
    return (
        <Parallax className="image1" bgImage={"https://usercontent1.hubstatic.com/15064796.jpg"} bgImageSizes={200} strength={200}>
            <NavBar />
            <div className="container22">
            <div className="content1">
                <h1 data-text="spaceview" className="img-txt">spaceview</h1><br />
            </div>
            <div className="des1">
                <p> EXPLORE THE UNIVERSE WITH INTERACTIVES AND VIDEOS </p>
            </div>
            </div>
        </Parallax>
    )
}

export default Header
