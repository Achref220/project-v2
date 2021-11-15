import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import './content.css'
import './main.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
      }, []);
    return (
        <Parallax className="image88" strength={200}>
            <span className="circle8 six"></span>
            <span className="circle8 seven"></span>
            <div className="container99">
                <Link to="/News"><div data-aos="fade-right" className="circle1"><h3>Collection</h3></div></Link>
                <Link to="/Planets"><div data-aos="flip-left" data-aos-easing="ease-out-cubic" className="circle2"><h3>planets</h3></div></Link>
                <Link to="/Videos"><div data-aos="fade-left" className="circle3"><h3>Videos</h3></div></Link>
            </div>
        </Parallax>
    )
}

export default Main
