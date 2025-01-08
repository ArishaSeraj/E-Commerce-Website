import React from 'react';
import './Hero.css';
import star_icon from '../Assets/Star Icon.png';
import arrow_icon from '../Assets/Arrow Icon.png';
import hero_image from '../Assets/Hero Icon.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-star-icon">
            <p>new</p>
            <img src={star_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero