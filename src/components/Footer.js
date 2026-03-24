import React from 'react';
import './Footer.css';

// =============================================
//  CONFIGURAÇÃO DO FOOTER
//  Altere links, colunas e redes sociais aqui
// =============================================
const COLUNAS = [
  {
    titulo: "Dev's",
    links: ['LinkedIn pessoal', 'LinkedIn pessoal', 'LinkedIn pessoal'],
  },
  {
    titulo: 'Logística',
    links: ['LinkedIn pessoal', 'LinkedIn pessoal', 'LinkedIn pessoal'],
  },
  {
    titulo: 'Branding',
    links: ['LinkedIn pessoal', 'LinkedIn pessoal', 'LinkedIn pessoal'],
  },
];

// Ícone LinkedIn SVG
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider" />

      <div className="footer-inner">
        {/* Logo + redes sociais */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-adota">Adota</span>
            <span className="footer-logo-heart">♥</span>
            <span className="footer-logo-patas">Patas</span>
            <p className="footer-tagline">Adote amor, mude uma vida</p>
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Colunas de links */}
        <div className="footer-cols">
          {COLUNAS.map((col) => (
            <div key={col.titulo} className="footer-col">
              <h4 className="footer-col-title">{col.titulo}</h4>
              <ul className="footer-col-links">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="footer-link">
                      <LinkedInIcon />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
