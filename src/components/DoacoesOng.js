import React, { useState, useEffect, useRef } from 'react';
import './DoacoesOng.css';
 
const ONGS = [
  {
    id: 1,
    nome: 'GAAR Campinas',
    subtitulo: 'Grupo de Apoio ao Animal de Rua',
    cidade: 'Campinas — SP',
    desde: 'Desde 2001',
    historia: 'Por mais de duas décadas, o GAAR luta contra o abandono e maus-tratos de cães e gatos em Campinas, especialmente no bairro de Barão Geraldo. Tudo começou com um pequeno grupo de voluntários indignados com os animais nas ruas — hoje, são centenas de resgates, castrações e adoções realizadas todo ano. Cada doação vai diretamente para tratamentos veterinários, cirurgias e alimentação dos animais.',
    impacto: ['Mais de 20 anos de atuação', 'Centenas de castrações por ano', 'Programa de lares temporários'],
    pix: 'contato@gaarcampinas.org',
    pixTipo: 'E-mail',
    cor: '#c8773a',
    foto: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80',
    site: 'https://gaarcampinas.org',
  },
  {
    id: 2,
    nome: 'GAVAA',
    subtitulo: 'Grupo de Apoio Voluntário aos Animais Abandonados',
    cidade: 'Campinas — SP',
    desde: 'Fundado por voluntários',
    historia: 'O GAVAA nasceu da indignação de moradores de Campinas ao ver animais sofrendo nas ruas sem nenhuma assistência. Hoje é uma organização consolidada, com CNPJ registrado, que realiza resgates de emergência, promove feiras de adoção e mantém uma rede de lares temporários. Cada real doado é convertido em ração, medicamentos e cuidados veterinários para quem mais precisa.',
    impacto: ['Resgates de emergência 24h', 'Feiras de adoção mensais', 'Rede de lares temporários'],
    pix: 'contato@gavaa.com.br',
    pixTipo: 'E-mail',
    cor: '#7a6abf',
    foto: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    site: 'https://www.gavaa.com.br',
  },
  {
    id: 3,
    nome: 'Aliança do Bem',
    subtitulo: 'Proteção Animal e Ambiental',
    cidade: 'Campinas — SP',
    desde: 'Atuação regional',
    historia: 'A Aliança do Bem une proteção animal e consciência ambiental em uma só causa. Em Campinas e região, a ONG resgata, trata e reintegra animais em situação de vulnerabilidade, além de promover campanhas de educação ambiental nas escolas e comunidades. Participam do programa Nota Fiscal Paulista e mantêm parcerias com empresas comprometidas com o bem-estar animal.',
    impacto: ['Educação ambiental em escolas', 'Parceria com empresas locais', 'Nota Fiscal Paulista'],
    pix: 'aliancadobem@aliancadobem.org.br',
    pixTipo: 'E-mail',
    cor: '#3a8c6e',
    foto: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80',
    site: 'https://aliancadobem.org.br',
  },
  {
    id: 4,
    nome: 'ONG Amor de Bicho',
    subtitulo: 'Ass. Propet de Amparo Animal',
    cidade: 'Campinas — SP',
    desde: 'Mais de 121K seguidores',
    historia: 'Com mais de 121 mil seguidores no Instagram, a Amor de Bicho é uma das ONGs mais ativas e transparentes de Campinas. Realizam resgates diários, divulgam animais para adoção e mantêm uma rede de apoiadores que tornam cada resgate possível. Sua força está na comunidade: cada compartilhamento e cada doação alimentam um ciclo de amor que já salvou milhares de vidas.',
    impacto: ['121K+ apoiadores nas redes', 'Resgates diários divulgados', 'Alta transparência nas contas'],
    pix: '22.315.008/0001-80',
    pixTipo: 'CNPJ',
    cor: '#bf6a7a',
    foto: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&q=80',
    site: 'https://www.instagram.com/amordebichocampinas/',
  },
  {
    id: 5,
    nome: 'Laticão',
    subtitulo: 'Associação de Proteção Animal',
    cidade: 'Campinas — SP',
    desde: 'Jardim Bela Vista',
    historia: 'Sediada no Jardim Bela Vista, em Campinas, a Laticão é uma associação sem fins lucrativos que dedica seus esforços ao resgate e cuidado de animais abandonados. Mantida exclusivamente por doações e pelo trabalho voluntário, a ONG realiza castrações, tratamentos veterinários e promove a adoção responsável na região. Cada gesto de generosidade se transforma diretamente em vida salva.',
    impacto: ['Sede física em Campinas', 'Aceita doações via PIX e PayPal', 'Castrações subsidiadas'],
    pix: '31.797.774/0001-19',
    pixTipo: 'CNPJ',
    cor: '#c8a83a',
    foto: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&q=80',
    site: 'https://laticao.org.br',
  },
  {
    id: 6,
    nome: 'Meu Pet Amoroso',
    subtitulo: 'Projeto de adoção e doação — Indaiatuba',
    cidade: 'Indaiatuba — SP',
    desde: 'Projeto regional',
    historia: 'O Meu Pet Amoroso é um projeto voltado exclusivamente para a região de Indaiatuba que conecta animais que precisam de lar com famílias dispostas a adotar. Além da adoção, facilitam doações online para ONGs parceiras da cidade, criando uma rede de suporte para protetores independentes que muitas vezes trabalham com recursos próprios e precisam de apoio da comunidade.',
    impacto: ['Foco em Indaiatuba e região', 'Plataforma de adoção online', 'Apoio a protetores independentes'],
    pix: 'meupetamoroso@gmail.com',
    pixTipo: 'E-mail',
    cor: '#3a7abf',
    foto: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=80',
    site: 'https://www.meupetamoroso.com.br',
  },
];
 
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
);
 
function OngCard({ ong, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [expandido, setExpandido] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  // ✅ CORREÇÃO: fallback para HTTP / mobile sem HTTPS
  const copiarPix = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(ong.pix).then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = ong.pix;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      } catch (err) {
        alert('Chave PIX: ' + ong.pix);
      }
      document.body.removeChild(textarea);
    }
  };
 
  const isEsquerda = index % 2 === 0;
 
  return (
    <div
      ref={ref}
      className={`ong-card ${visible ? 'ong-card-visible' : ''} ${isEsquerda ? 'ong-esquerda' : 'ong-direita'}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Foto */}
      <div className="ong-foto-wrap">
        <div className="ong-foto-border" style={{ borderColor: ong.cor }} />
        <img src={ong.foto} alt={ong.nome} className="ong-foto" />
        <div className="ong-cidade-badge">{ong.cidade}</div>
      </div>
 
      {/* Conteúdo */}
      <div className="ong-content">
        <div className="ong-header">
          <div>
            <span className="ong-desde" style={{ color: ong.cor }}>{ong.desde}</span>
            <h3 className="ong-nome">{ong.nome}</h3>
            <p className="ong-subtitulo">{ong.subtitulo}</p>
          </div>
        </div>
 
        <p className={`ong-historia ${expandido ? 'ong-historia-expandida' : ''}`}>
          {ong.historia}
        </p>
        <button className="btn-ver-mais" onClick={() => setExpandido(!expandido)}>
          {expandido ? 'Ver menos ↑' : 'Ver mais ↓'}
        </button>
 
        {/* Impacto */}
        <div className="ong-impacto">
          {ong.impacto.map((item, i) => (
            <span key={i} className="ong-impacto-chip" style={{ borderColor: `${ong.cor}40`, color: ong.cor }}>
              ✓ {item}
            </span>
          ))}
        </div>
 
        {/* PIX */}
        <div className="ong-pix-box" style={{ borderColor: `${ong.cor}30` }}>
          <div className="ong-pix-header">
            <span className="ong-pix-label">Chave PIX — {ong.pixTipo}</span>
            <a href={ong.site} target="_blank" rel="noreferrer" className="ong-site-link">
              Visitar site ↗
            </a>
          </div>
          <div className="ong-pix-row">
            <span className="ong-pix-chave">{ong.pix}</span>
            <button
              className="btn-copiar"
              onClick={copiarPix}
              style={{ background: copiado ? ong.cor : 'transparent', borderColor: ong.cor, color: copiado ? '#fff' : ong.cor }}
            >
              <CopyIcon />
              {copiado ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
function DoacoesOng() {
  const [busca, setBusca] = useState('');
 
  const ongsFiltradas = ONGS.filter(o =>
    o.nome.toLowerCase().includes(busca.toLowerCase()) ||
    o.cidade.toLowerCase().includes(busca.toLowerCase())
  );
 
  return (
    <section className="doacoes-section" id="doacoes">
 
      {/* Hero da seção */}
      <div className="doacoes-hero">
        <div className="doacoes-hero-inner">
          <span className="doacoes-eyebrow">Faça a diferença hoje</span>
          <h1 className="doacoes-title">
            Doações para<br />
            <span className="doacoes-title-destaque">ONGs</span>
          </h1>
          <p className="doacoes-desc">
            Conheça organizações reais da região de Campinas e Indaiatuba que transformam doações em vidas salvas. Copie a chave PIX e doe qualquer valor — cada centavo importa.
          </p>
 
          {/* Busca */}
          <input
            className="doacoes-busca"
            type="text"
            placeholder="Buscar por ONG ou cidade..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
        </div>
 
        {/* Stats */}
        <div className="doacoes-stats">
          <div className="stat-item">
            <span className="stat-num">6</span>
            <span className="stat-label">ONGs parceiras</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">20+</span>
            <span className="stat-label">Anos de atuação</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">∞</span>
            <span className="stat-label">Vidas que você pode salvar</span>
          </div>
        </div>
      </div>
 
      {/* Lista de ONGs */}
      <div className="ongs-lista">
        {ongsFiltradas.length > 0 ? ongsFiltradas.map((ong, i) => (
          <OngCard key={ong.id} ong={ong} index={i} />
        )) : (
          <div className="ongs-vazio">
            <p>Nenhuma ONG encontrada para "{busca}"</p>
            <button onClick={() => setBusca('')}>Limpar busca</button>
          </div>
        )}
      </div>
 
      {/* CTA final */}
      <div className="doacoes-cta">
        <p className="doacoes-cta-text">
          Não sabe quanto doar? <strong>Qualquer valor faz diferença.</strong><br />
          Com R$10 você garante alimentação por um dia. Com R$50, parte de um tratamento veterinário.
        </p>
      </div>
 
    </section>
  );
}
 
export default DoacoesOng;
 