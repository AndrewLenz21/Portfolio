import React from 'react';
import './Footer.scss';

// Constants
import { images } from '../../constants';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="social__footer">
            <div className="icons__footer">
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
        </div>
        <span className="footer__message">
            <a href="https://github.com/AndrewLenz21/Portfolio" className='' target="_blank" rel="noreferrer" >Built by Andrew Lenz &nbsp;</a>
            <i class='bx bx-smile' ></i>
        </span>
    </footer>
  )
}

export default Footer