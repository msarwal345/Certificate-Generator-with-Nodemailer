import React from 'react';
import './HeroSection.css';

export function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-background'>
        <img src='read.png' alt='Book Image' className='hero-image' />
      </div>

      <div className="hero-content">
        <h1>Welcome to CertifyNow</h1>
        <p id='id1'>Generate and email certificates with ease.</p>
        <a href="/upload" className="btn">Get Started</a>
      </div>
    </div>
  );
}

export default HeroSection;
