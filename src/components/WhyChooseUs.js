import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

// =============================================
//  CONFIGURAÇÃO DOS BENEFÍCIOS
//  Altere ícones, títulos e textos aqui!
// =============================================
const benefits = [
  {
    id: 1,
    position: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: 'Memórias',
    text: 'Abrace uma jornada repleta de alegria, amor e memórias preciosas.',
  },
  {
    id: 2,
    position: 'center',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/>
      </svg>
    ),
    title: 'Orientação',
    text: 'Nossa equipe dedicada está comprometida em conectá-lo com o companheiro peludo perfeito.',
  },
  {
    id: 3,
    position: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    ),
    title: 'Amor Incondicional',
    text: 'Experimente a forma mais pura de companhia que só um cachorro pode oferecer.',
  },
];

function BenefitCard({ benefit, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`benefit-card benefit-${benefit.position} ${visible ? 'benefit-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="benefit-icon-wrap">{benefit.icon}</div>
      <h3 className="benefit-title">{benefit.title}</h3>
      <p className="benefit-text">{benefit.text}</p>
    </div>
  );
}

function WhyChooseUs() {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const taglineRef = useRef(null);
  const [tagVisible, setTagVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true); }, { threshold: 0.3 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTagVisible(true); }, { threshold: 0.3 });
    if (titleRef.current) obs1.observe(titleRef.current);
    if (taglineRef.current) obs2.observe(taglineRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section className="why-section">
      <div className="why-grain" />
      <h2 ref={titleRef} className={`why-title ${titleVisible ? 'why-title-visible' : ''}`}>
        Porque nos<br />escolher!
      </h2>
      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <BenefitCard key={b.id} benefit={b} delay={i * 150} />
        ))}
      </div>
      <div ref={taglineRef} className={`why-tagline ${tagVisible ? 'why-tagline-visible' : ''}`}>
       
      </div>
    </section>
  );
}

export default WhyChooseUs;
