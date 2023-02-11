import React from 'react'

import './Social.scss';

// Constants
import { images } from '../../constants';

const Social = () => {
  return (
    <div>
      {/* SOCIAL LINKS */}
      <div className="home__social">
        {/* Github link */}
        <a href="https://bit.ly/githublenz" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-github-alt"></i>
        </a>
        {/* Linkedin link */}
        <a href="https://bit.ly/linkedinlenzprofile" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-linkedin"></i>
        </a>
        {/* Instagram link */}
        <a href="https://bit.ly/instagramlenz" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-instagram"></i>
        </a>
        {/* Codepen link */}
        <a href="https://bit.ly/codepenLenz" className="home__social-icon" target="_blank" rel="noreferrer">
            <img src={images.logoCodePen} alt="logoCodePen" />
        </a>
      </div>
      {/* EMAIL LINK */}
      <div className="email__send">
        <div className="email__link">
          <a href="mailto:angelitolenz2000@gmail.com">angelitolenz2000@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Social