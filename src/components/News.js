import React from 'react'
import classes from './News.module.css'
import video from '../images/video.mp4'
import NavBar from './NavBar'

function News() {
    return (
        <div className={classes.global}>
            <div className={classes.header}>
                <NavBar />
            <video className={classes.video} autoPlay loop muted >
                <source src={video} type="video/mp4" />
            </video>
                <h1 className={classes.title}>What Will You Explore ?</h1>
            </div>
            <div className={classes.mainText}>
                <div>
                    <h5>What the universe is made of</h5>
                </div>
                <div>
                    <h5>How the universe changes over time</h5>
                </div>
                <div>
                    <h5>How we know what we know</h5>
                </div>
                <div className={classes.b}>
                    <h5>The future of astronomy and Earth science</h5>
                </div>
            </div>
            <div className={classes.topCon}>
                <div className={classes.sidetext}>
                    <h3>what this website will provide you</h3>
                    <p> ipsum dolor sit amet, consectetur adipisicing elit. Vel amet repellendus
                        maxime adipisci. Ut suscipit, enim illum deleniti sit sapiente soluta 
                        reprehenderit eveniet, error beatae quis impedit ducimus sint quas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet atque vero 
                        fuga maxime cumque ut ea cum itaque aperiam eveniet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea facere inventore, molestiae nulla possimus at vel aliquam asperiores modi nihil eum aliquid reprehenderit est molestias similique? Iste, voluptatum odio?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vero beatae expedita, sequi amet atque veniam similique natus molestias consequatur asperiores distinctio, consequuntur culpa delectus suscipit ratione quo repellat mollitia.
                        consectetur iste impedit est tempore. Fuga minus mollitia nesciunt.</p>
                </div>
            <div className={classes.iconCards}>
                <div className={classes.iconCardsContent}>
                    <div className={classes.iconCardsItem}></div>
                    <div className={classes.iconCardsItem}></div>
                    <div className={classes.iconCardsItem}></div>
                    <div className={classes.iconCardsItem}></div>
                    <div className={classes.iconCardsItem}></div>
                </div>
            </div>
            <div className={classes.news}><h2>latest news</h2></div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.item1}>
                    <h4>The Latest Discoveries in Astronomy and Astrophysics</h4>
                    <img src="https://viewspace.org/assets/home-about/collection/planet_collision-8f4a3be8f37d2b4f52e4e867e2c9f3623e54f3ef3ce4f30b6a9fc02206eede92.png" alt="item1" />
                </div>
                <div className={classes.item2}>
                    <h4>Recent Natural Events and Satellite Views of Earth</h4>
                    <img src="https://viewspace.org/assets/home-about/collection/earth_watch_sinabung-89c43e98cf29512913ccf79d84ddac1afc4f011af7bae44084e9fb881a059439.png" alt="item2" />
                </div>
                <div className={classes.item3}>
                    <h4>In-depth Stories of How Science and the Universe Work</h4>
                    <img src="https://viewspace.org/assets/home-about/collection/shadow_moon-be489e16ff6b6e50f70aef1ec2bced0e49b4745ddd15a3fc5c81349ee83f867e.png" alt="item3" />
                </div>
                <div className={classes.item4}>
                    <h4>Stunning Imagery and Accessible Explanations</h4>
                    <img src="https://viewspace.org/assets/home-about/collection/cosmic_tour-aa4b11e7db436c0df1deaae72a9e6a464476bc6bcf0fff8eb8e21453c402aaab.png" alt="item4" />
                </div>
            </div>
            <div className={classes.stats}>
                <h1>statistics</h1>
                <div>
                <h4 className={classes.himg1}>NASA’s Major Project Portfolio Cost and Schedule Performance Deteriorated</h4>
                <img className={classes.img1} src="https://www.gao.gov/assets/extracts/6360604aa2b71701ab995c0b6d171e45/rId20_image2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default News
