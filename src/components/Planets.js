import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import './planets.css';
import planetvid from '../images/planets.mp4'

function Planets(props) {
    const planets = useSelector((state) => state.planets);
    let Filter = planets.filter((plan, key ) => (
        plan.title.toLowerCase().includes(props.search.toLowerCase())
    ));
    const renderedImages = Filter.map((planet) => (
        <div className="planet-c4" key={planet.id}>
        <h3>{planet.title}</h3>
        <img className="planet-img" src={planet.image} alt="f4" />
        <p>{planet.desc}</p>
        </div>
    ));
    const handleSearch = (e) => props.setSearch(e.target.value)
    return (
        <div className="main-c4">
            <div className="p-header">
            <NavBar />
            <h1>planets</h1>
            <video className="planet-vid" autoPlay loop muted id="video">
                <source src={planetvid} type="video/mp4"/>
            </video>
            <div className="searchbox">
                <input 
                type="search" 
                placeholder="Search a planet" 
                value={props.search}
                onChange={handleSearch}
                />
            </div>
            </div>
            <div className="planets-content">
            <div className="content-c4">
            {renderedImages}
            </div>
            </div>
        </div>
    )
}

export default Planets
