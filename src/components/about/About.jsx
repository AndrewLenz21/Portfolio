import React from 'react'
import "./About.scss"

import Info from './Info';

// Constants
import { images } from '../../constants';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <div className="img__container">
                <img src={images.aboutImg} alt="aboutImg" className='about__img' />
            </div>

            <div className="about__data">
                <Info/>
                <p className="about__description">
                    I have the ability to create dynamic and responsive websites. 
                    I always give my best in every job or project, 
                    I hope to have the opportunity to work with you.
                </p>

                <a download="AndrewLenzCV" href={images.CV} className='button button--flex'>
                    <div className="text">
                        Download CV &nbsp;
                    </div>
                    <img src={images.files} alt="files" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About