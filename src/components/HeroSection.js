import React, { useState, useEffect } from 'react';
import dogs from '../data/dogs';
import './HeroSection.css';

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${loaded ? 'hero-loaded' : ''}`}>
      <div className="cards-row">
        {dogs.map((dog, index) => (
          <div
            key={dog.id}
            className={`dog-card-flat ${hovered === index ? 'dog-card-hovered' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={dog.photo}
              alt={dog.name}
              className="dog-photo-flat"
              draggable={false}
            />
            <div className="dog-name-overlay-flat">
              <span className="dog-name-flat">{dog.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;