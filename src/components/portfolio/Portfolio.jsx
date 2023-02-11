import React from 'react'
import './Portfolio.scss';

import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">My Portfolio</h2>
        <span className="section__subtitle">Some of my Projects</span>
        {/* Container Portfolio */}
        <div className="portfolio__container container grid">
            <Projects/>
        </div>
    </section>
  )
}

export default Portfolio