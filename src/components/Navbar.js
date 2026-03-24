import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Encontre seu Pet', href: '#pets' },
  { label: "Doações para ONG'S", href: '#doacoes' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#" className="navbar-logo">
        <span className="logo-adota">Adota</span>
        <span className="logo-heart">♥</span>
        <span className="logo-patas">Patas</span>
      </a>

      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link">{link.label}</a>
          </li>
        ))}
      </ul>

      <button className="btn-entrar" onClick={() => window.location.href = '/login.html'}>
  Entrar
</button>

      <button
        className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button className="btn-entrar btn-entrar-mobile">Entrar</button>
      </div>
    </nav>
  );
}

export default Navbar;
