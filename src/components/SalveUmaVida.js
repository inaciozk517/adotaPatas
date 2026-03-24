import React, { useEffect, useRef, useState } from 'react';
import './SalveUmaVida.css';

// =============================================
//  CONFIGURAÇÃO - Altere imagem e texto aqui
// =============================================
const IMAGEM = '/assets/cp3.png';
// Para usar imagem local: import img from '../assets/seu-cachorro.jpg'
// e troque IMAGEM por img

const TEXTO = 'Por que adotar? Porque o amor não se compra, se resgata. Ao abrir as portas da sua casa para um cãozinho, você faz a diferença em dobro: transforma a realidade daquele pet e, ao mesmo tempo, libera espaço na ONG para que outro animal seja socorrido. Adotar é reescrever um destino, oferecendo segurança para quem tem muito amor guardado para dar.';

function SalveUmaVida() {
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
    <section ref={ref} className={`salve-section ${visible ? 'salve-visible' : ''}`}>
      <div className="salve-inner">

        {/* Imagem */}
        <div className="salve-img-wrap">
          <img src={IMAGEM} alt="Cachorro esperando adoção" className="salve-img" />
        </div>

        {/* Texto */}
        <div className="salve-content">
          <h2 className="salve-title">Salve uma vida</h2>
          <p className="salve-text">{TEXTO}</p>
        </div>

      </div>
    </section>
  );
}

export default SalveUmaVida;
