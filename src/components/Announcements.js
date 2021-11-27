import React, { useEffect } from "react";
import "./announcements.css";
import Aos from "aos";
import "aos/dist/aos.css"

const Announcements = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, []);
  return (
    <div className="image222">
      <div className="leftBox">
        <div className="content-a">
          <h1>Announcements and events</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Cupiditate sequi, odit ab in omnis qui. Pariatur soluta in,
             accusamus qui illum quos exercitationem impedit, 
             amet voluptas voluptatem voluptatibus doloremque ullam.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Quia dolorum consequatur sit, eos impedit repudiandae nesciunt
          </p>
        </div>
        <div className="image-section" id="slider">
        <figure>
          <img src="https://techcrunch.com/wp-content/uploads/2021/10/Space-Perspective-offers-a-radically-gentle-journey-20-miles-above.jpg?w=730&crop=1" alt="back-up13" />
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg?crop=1.00xw:0.752xh;0,0.113xh&resize=1200:*" alt="back-up12" />
          <img src="https://media.newstrack.in/uploads/education-news/general-knowledge/May/07/big_thumb/milkyway_5cd1838e691af.jpg" alt="back-up11" />
        </figure>
      </div>
      </div>
      <div className="events">
        <ul>
          <li>
            <div className="time">
              <h2>19<br/><span>December</span></h2>
            </div>
            <div className="details">
              <h3> Micro Full Moon / Cold Moon</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos a vel impedit saepe quas  incidunt</p>
                <a href="https://www.timeanddate.com/astronomy/meteor-shower/geminids.html" rel="noreferrer" target="_blank">View Details</a>
            </div>
            <div style={{clear: "both"}}></div>
          </li>
          <li>
            <div className="time">
              <h2>4<br/><span>December</span></h2>
            </div>
            <div className="details">
              <h3>Total Solar Eclipse</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos a vel impedit saepe quas  incidunt</p>
                <a href="https://www.timeanddate.com/eclipse/solar/2021-december-4" rel="noreferrer" target="_blank">View Details</a>
            </div>
            <div style={{clear: "both"}}></div>
          </li>
          <li>
            <div className="time">
              <h2>7<br/><span>January</span></h2>
            </div>
            <div className="details">
              <h3>Mercury at Greatest Elongation East</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos a vel impedit saepe quas  incidunt</p>
                <a href="https://www.timeanddate.com/astronomy/night/" rel="noreferrer" target="_blank">View Details</a>
            </div>
            <div style={{clear: "both"}}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
