import React, { useState } from 'react';
import "./Header.scss";

const Header = () => {
    // *Constant for the menu
    /* Toggle Menu and Show Menu*/
    const [Toggle, showMenu] = useState(false);
    /*Header animado*/

    


  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Andrew Lenz</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                {/* NAV LIST */}
                <ul className="nav__list grid">
                    {/* List ELEMENT */}
                    <li className="nav__items">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    {/* List ELEMENT */}
                    <li className="nav__items">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    {/* List ELEMENT */}
                    <li className="nav__items">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file nav__icon"></i> Skills
                        </a>
                    </li>
                    {/* List ELEMENT */}
                    <li className="nav__items">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    {/* List ELEMENT */}
                    <li className="nav__items">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                {/* NAV LIST end */}

                <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header