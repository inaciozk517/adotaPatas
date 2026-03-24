import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';

// =============================================
//  CONFIGURAÇÃO DO HERO
//  Troque a imagem de fundo e título aqui
// =============================================
const HERO_BG_IMAGE = '/assets/download.png';

const HERO_TITLE = 'Encontre seu\nmelhor amigo\npertinho de\nvocê.';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_BG_IMAGE;
    img.onload = () => setLoaded(true);
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero ${loaded ? 'hero-loaded' : ''}`}>
      <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }} />
      <div className="hero-overlay" />
      <Navbar />
      <div className="hero-content">
        <h1 className="hero-title">
          {HERO_TITLE.split('\n').map((line, i) => (
            <span key={i} className="hero-title-line" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              {line}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
