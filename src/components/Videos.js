import React, { useEffect, useState } from 'react'
import video88 from '../images/vid88.mp4'
import vid89 from '../images/vid89.mp4'
import vid90 from '../images/vid90.mp4'
import vid91 from '../images/vid91.mp4'
import NavBar from './NavBar'
import vid92 from '../images/vid92.mp4'
import Aos from 'aos'
import './video.css'
import { useSelector } from 'react-redux'

function Videos() {
    useEffect(() => {
        Aos.init({ duration: 3000 })
      }, []);
      const [show, setShow] = useState(false);
      const vids = useSelector((state) => state.video) ;
      const renVids = vids.map((item) => (
        <div className="viditem" key={item.id}>
            <iframe width="400px" height="300px" src={item.frame} title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>
        </div>
      ))
    return (
        <div>
            <div className="header88">
                <NavBar />
            <video className="vid88" autoPlay loop muted >
                <source src={video88} type="video/mp4" />
            </video>
            <h1> about the Videos</h1>
            </div>
            <div className="underhead">
                <h4>Expand Your Universe with the SpaceView Video Collection</h4>
            </div>
            <div className="sec1">
                <div className="p1"><p>Lorem ipsum, dolor sit amet consectetur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aspernatur debitis, vitae ad iure minima ea praesentium quas velit illum nam magni porro dolorem fuga mollitia
                     asperiores harum aliquam deleniti. adipisicing elit. Cum vero accusamus 
                     reprehenderit itaque, voluptatum ex et? Pariatur neque qui culpa! Perspiciatis 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima numquam harum,
                      recusandae, eaque reprehenderit enim sunt voluptates quasi illum quis?
                      Autem laborum aliquid magni qui iste, nobis non. Placeat! 
                      impedit aliquam ipsum facilis reprehenderit porro! Ea, nemo similique!</p></div>
                <div>
                    <video className="vid89" autoPlay loop muted controls>
                        <source src={vid89} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="sec2">
            <div className="p2">
            <p>Lorem ipsum, dolor sit amet consectetur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aspernatur debitis, vitae ad iure minima ea praesentium quas velit illum nam magni porro dolorem fuga mollitia
                     asperiores harum aliquam deleniti. adipisicing elit. Cum vero accusamus 
                     reprehenderit itaque, voluptatum ex et? Pariatur neque qui culpa! Perspiciatis 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima numquam harum,
                      recusandae, eaque reprehenderit enim sunt voluptates quasi illum quis?
                      Autem laborum aliquid magni qui iste, nobis non. Placeat! 
                      impedit aliquam ipsum facilis reprehenderit porro! Ea, nemo similique!</p>
            </div>
            <div data-aos="fade-right">
            <video className="vid90" autoPlay loop muted  controls>
                        <source src={vid90} type="video/mp4" />
                    </video>
            </div>
            </div>
            <div className="sec3">
            <div className="p3">
            <p>Lorem ipsum, dolor sit amet consectetur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aspernatur debitis, vitae ad iure minima ea praesentium quas velit illum nam magni porro dolorem fuga mollitia
                     asperiores harum aliquam deleniti. adipisicing elit. Cum vero accusamus 
                     reprehenderit itaque, voluptatum ex et? Pariatur neque qui culpa! Perspiciatis 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima numquam harum,
                      recusandae, eaque reprehenderit enim sunt voluptates quasi illum quis?
                      Autem laborum aliquid magni qui iste, nobis non. Placeat! 
                      impedit aliquam ipsum facilis reprehenderit porro! Ea, nemo similique!</p>
            </div>
            <div data-aos="fade-left">
            <video className="vid91" autoPlay loop muted  controls>
                        <source src={vid91} type="video/mp4" />
            </video>
            </div>
            </div>
            <div className="sec4">
            <div className="p4">
            <p>Lorem ipsum, dolor sit amet consectetur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aspernatur debitis, vitae ad iure minima ea praesentium quas velit illum nam magni porro dolorem fuga mollitia
                     asperiores harum aliquam deleniti. adipisicing elit. Cum vero accusamus 
                     reprehenderit itaque, voluptatum ex et? Pariatur neque qui culpa! Perspiciatis 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima numquam harum,
                      recusandae, eaque reprehenderit enim sunt voluptates quasi illum quis?
                      Autem laborum aliquid magni qui iste, nobis non. Placeat! 
                      impedit aliquam ipsum facilis reprehenderit porro! Ea, nemo similique!</p>
            </div>
            <div data-aos="fade-right">
            <video className="vid92" autoPlay loop muted  controls>
                        <source src={vid92} type="video/mp4" />
                    </video>
            </div>
            </div>
            <div>
                <div className="title11">
                    <h1 onClick={() => setShow(true)}>more videos</h1>
                </div>
                {show ? (<div className="ytvid">
                    {renVids}
                </div>) : null}
            </div>
        </div>
    )
}

export default Videos
