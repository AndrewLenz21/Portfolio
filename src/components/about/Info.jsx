import React from 'react'

import './Info.scss';

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <h3 className="about__title">
                Date of Birth &nbsp;
                <i class="uil uil-gift about__icon"></i>
            </h3>
            <span className="about__subtitle">21/02/2000</span>
        </div>
        
        <div className="about__box">
            <h3 className="about__title">
                Languages &nbsp;
                <i class="uil uil-english-to-chinese about__icon"></i>
            </h3>
            <span className="about__subtitle">English (EN), Spanish(ES), Italian(IT)</span>
        </div>
        
        <div className="about__box">
            <h3 className="about__title">
                Current Location &nbsp;
                <i class="uil uil-location-point about__icon"></i>
            </h3>
            <span className="about__subtitle">Milan, Italy</span>
        </div>

    </div>
  )
}

export default Info