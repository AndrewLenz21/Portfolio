import React from 'react'

import { images } from '../../constants';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Andrew Lenz &nbsp;
            {/* SVG: Hand */}
            <img src={images.handIcon} alt="handIcon" className='home__hand'/>
            {/* end SVG */}
        </h1>
        <h3 className="home__subtitle">Web developer Junior</h3>
        <p className="home__description">
            I'm a Front-end developer based in Milan Italy. I'm a beginner but I always do my best on every project. 
        </p>

        <a href="#contact" className="button button--flex send__button">
            {/* &nbsp for some space */}
            <div className="text">
              Say Hello &nbsp;
            </div>
            {/* SVG: send */}
            <img src={images.sendIcon} alt="sendIcon"/>
            {/* end SVG */}
        </a>
    </div>
  )
}

export default Data