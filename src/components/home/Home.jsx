import React from 'react'
import "./Home.scss";

import ScrollDown from './ScrollDown';
import Data from './Data';


// Constants
import { images } from '../../constants';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container grid">

            <div className="home__content grid">
                <Data/>
                <img src={images.profilePhoto} alt="profilePhoto" className='home__img' />
            </div>

            <div className="scroll__content">
                <ScrollDown/>
            </div>
            
        </div>
    </section>
  )
}

export default Home