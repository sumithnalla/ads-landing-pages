import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import './HeroSection.css';

const images = [
  "/ads/bangalore/gallery/1.webp",
  "/ads/bangalore/gallery/2.webp",
  "/ads/bangalore/gallery/3.webp",
  "/ads/bangalore/gallery/4.webp",
  "/ads/bangalore/gallery/5.webp",
  "/ads/bangalore/gallery/6.webp",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <div className="text-logo">RAM'S AUDIOVISUALS</div>
      </nav>
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img})` }}
        />
      ))}

      <div className="hero-content">
        <div className="hero-badge">Ram's AudioVisual Services</div>
        <h1 className="hero-title">Projector, Sound & LED Screen Rental in Bangalore</h1>
        <p className="hero-subtitle"> Ram's AudioVisuals Premium Audio-Visual solutions for Corporate Events, Weddings, and Private Parties. Fast setup and expert support.</p>

        <div className="hero-features">
          <div className="h-feature">
            <Shield size={18} /> <span>Premium Equipment</span>
          </div>
          <div className="h-feature">
            <Clock size={18} /> <span>24/7 Support</span>
          </div>
          <div className="h-feature">
            <Award size={18} /> <span>Expert Setup</span>
          </div>
        </div>

        <div className="hero-btns">
          <a href="tel:+919553703737" className="btn btn-primary">
            <Phone size={18} /> Book Now
          </a>
          <button onClick={() => scrollToSection('reviews-section')} className="btn btn-outline">
            View Reviews <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;