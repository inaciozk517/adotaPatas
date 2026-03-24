import React, { useState, useMemo } from 'react';
import './PetsAdocao.css';

// =============================================
//  CONFIGURAÇÃO DOS PETS
//  Adicione ou edite pets aqui facilmente!
// =============================================
const PETS = [
  {
    id: 1,
    nome: 'Mel',
    raca: 'Golden Retriever',
    idade: '2 anos',
    idadeNum: 2,
    porte: 'Grande',
    sexo: 'Fêmea',
    status: 'Disponível',
    descricao: 'Mel é carinhosa, brincalhona e adora crianças. Vacinada e vermifugada.',
    foto: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
    ong: 'ONG Patinhas',
  },
  {
    id: 2,
    nome: 'Thor',
    raca: 'Labrador',
    idade: '4 meses',
    idadeNum: 0,
    porte: 'Grande',
    sexo: 'Macho',
    status: 'Disponível',
    descricao: 'Filhote energético, ótimo para famílias ativas. Primeira dose já tomada.',
    foto: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=400&q=80',
    ong: 'ONG Resgate SP',
  },
  {
    id: 3,
    nome: 'Nina',
    raca: 'SRD',
    idade: '1 ano',
    idadeNum: 1,
    porte: 'Médio',
    sexo: 'Fêmea',
    status: 'Disponível',
    descricao: 'Nina é tímida no início mas muito leal. Ótima com outros cães.',
    foto: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&q=80',
    ong: 'ONG Amor Animal',
  },
  {
    id: 4,
    nome: 'Bob',
    raca: 'Bulldog',
    idade: '3 anos',
    idadeNum: 3,
    porte: 'Médio',
    sexo: 'Macho',
    status: 'Em processo',
    descricao: 'Bob é calmo e companheiro. Adora dormir e passear no parque.',
    foto: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&q=80',
    ong: 'ONG Patinhas',
  },
  {
    id: 5,
    nome: 'Luna',
    raca: 'Poodle',
    idade: '5 anos',
    idadeNum: 5,
    porte: 'Pequeno',
    sexo: 'Fêmea',
    status: 'Disponível',
    descricao: 'Luna é inteligente e muito carinhosa. Já sabe vários comandos.',
    foto: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&q=80',
    ong: 'ONG Resgate SP',
  },
  {
    id: 6,
    nome: 'Rex',
    raca: 'Pastor Alemão',
    idade: '6 anos',
    idadeNum: 6,
    porte: 'Grande',
    sexo: 'Macho',
    status: 'Disponível',
    descricao: 'Rex é leal e protetor. Ótimo para quem busca um companheiro fiel.',
    foto: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80',
    ong: 'ONG Amor Animal',
  },
];

const PORTES = ['Todos', 'Pequeno', 'Médio', 'Grande'];
const IDADES = ['Todos', 'Filhote (0-1 ano)', 'Jovem (1-3 anos)', 'Adulto (3+ anos)'];
const SEXOS = ['Todos', 'Macho', 'Fêmea'];
const STATUS = ['Todos', 'Disponível', 'Em processo'];

function PetCard({ pet, onContato }) {
  return (
    <div className="pet-card">
      <div className="pet-card-img-wrap">
        <img src={pet.foto} alt={pet.nome} className="pet-card-img" />
        <span className={`pet-status pet-status-${pet.status === 'Disponível' ? 'ok' : 'busy'}`}>
          {pet.status}
        </span>
      </div>
      <div className="pet-card-body">
        <div className="pet-card-header">
          <h3 className="pet-nome">{pet.nome}</h3>
          <span className="pet-sexo">{pet.sexo}</span>
        </div>
        <div className="pet-chips">
          <span className="pet-chip">{pet.raca}</span>
          <span className="pet-chip">{pet.idade}</span>
          <span className="pet-chip">{pet.porte}</span>
        </div>
        <p className="pet-descricao">{pet.descricao}</p>
        <div className="pet-card-footer">
          <span className="pet-ong">📍 {pet.ong}</span>
          <button
            className="btn-adotar"
            disabled={pet.status !== 'Disponível'}
            onClick={() => onContato(pet)}
          >
            {pet.status === 'Disponível' ? 'Quero adotar' : 'Em processo'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Modal({ pet, onClose }) {
  if (!pet) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={pet.foto} alt={pet.nome} className="modal-img" />
        <div className="modal-body">
          <h2 className="modal-nome">{pet.nome}</h2>
          <div className="pet-chips" style={{ marginBottom: 12 }}>
            <span className="pet-chip">{pet.raca}</span>
            <span className="pet-chip">{pet.idade}</span>
            <span className="pet-chip">{pet.porte}</span>
            <span className="pet-chip">{pet.sexo}</span>
          </div>
          <p className="modal-descricao">{pet.descricao}</p>
          <p className="modal-ong">📍 {pet.ong}</p>
          <a
            href={`https://wa.me/5511999999999?text=Olá! Tenho interesse em adotar o(a) ${pet.nome}!`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            💬 Entrar em contato via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function PetsAdocao() {
  const [porte, setPorte] = useState('Todos');
  const [idade, setIdade] = useState('Todos');
  const [sexo, setSexo] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [petSelecionado, setPetSelecionado] = useState(null);

  const petsFiltrados = useMemo(() => {
    return PETS.filter(p => {
      if (porte !== 'Todos' && p.porte !== porte) return false;
      if (sexo !== 'Todos' && p.sexo !== sexo) return false;
      if (status !== 'Todos' && p.status !== status) return false;
      if (busca && !p.nome.toLowerCase().includes(busca.toLowerCase()) &&
          !p.raca.toLowerCase().includes(busca.toLowerCase())) return false;
      if (idade === 'Filhote (0-1 ano)' && p.idadeNum >= 1) return false;
      if (idade === 'Jovem (1-3 anos)' && (p.idadeNum < 1 || p.idadeNum >= 3)) return false;
      if (idade === 'Adulto (3+ anos)' && p.idadeNum < 3) return false;
      return true;
    });
  }, [porte, idade, sexo, status, busca]);

  const limparFiltros = () => {
    setPorte('Todos'); setIdade('Todos');
    setSexo('Todos'); setStatus('Todos'); setBusca('');
  };

  return (
   <section className="adocao-section" id="adocao">
      <div className="adocao-header">
        <h2 className="adocao-title">Encontre seu <span>companheiro</span></h2>
        <p className="adocao-sub">
          {petsFiltrados.length} pet{petsFiltrados.length !== 1 ? 's' : ''} esperando por você
        </p>
      </div>

      {/* Busca */}
      <div className="adocao-busca-wrap">
        <input
          className="adocao-busca"
          type="text"
          placeholder="Buscar por nome ou raça..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
      </div>

      {/* Filtros */}
      <div className="filtros-wrap">
        <div className="filtro-group">
          <label>Porte</label>
          <div className="filtro-chips">
            {PORTES.map(p => (
              <button
                key={p}
                className={`filtro-chip ${porte === p ? 'filtro-chip-ativo' : ''}`}
                onClick={() => setPorte(p)}
              >{p}</button>
            ))}
          </div>
        </div>
        <div className="filtro-group">
          <label>Idade</label>
          <div className="filtro-chips">
            {IDADES.map(i => (
              <button
                key={i}
                className={`filtro-chip ${idade === i ? 'filtro-chip-ativo' : ''}`}
                onClick={() => setIdade(i)}
              >{i}</button>
            ))}
          </div>
        </div>
        <div className="filtro-group">
          <label>Sexo</label>
          <div className="filtro-chips">
            {SEXOS.map(s => (
              <button
                key={s}
                className={`filtro-chip ${sexo === s ? 'filtro-chip-ativo' : ''}`}
                onClick={() => setSexo(s)}
              >{s}</button>
            ))}
          </div>
        </div>
        <div className="filtro-group">
          <label>Status</label>
          <div className="filtro-chips">
            {STATUS.map(s => (
              <button
                key={s}
                className={`filtro-chip ${status === s ? 'filtro-chip-ativo' : ''}`}
                onClick={() => setStatus(s)}
              >{s}</button>
            ))}
          </div>
        </div>
        <button className="btn-limpar" onClick={limparFiltros}>Limpar filtros</button>
      </div>

      {/* Grid de pets */}
      {petsFiltrados.length > 0 ? (
        <div className="pets-grid">
          {petsFiltrados.map(pet => (
            <PetCard key={pet.id} pet={pet} onContato={setPetSelecionado} />
          ))}
        </div>
      ) : (
        <div className="pets-vazio">
          <span>🐾</span>
          <p>Nenhum pet encontrado com esses filtros.</p>
          <button className="btn-limpar" onClick={limparFiltros}>Limpar filtros</button>
        </div>
      )}

      {/* Modal */}
      <Modal pet={petSelecionado} onClose={() => setPetSelecionado(null)} />
    </section>
  );
}

export default PetsAdocao;
