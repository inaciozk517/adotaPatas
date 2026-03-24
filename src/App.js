import React from 'react';
import './App.css';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import SalveUmaVida from './components/SalveUmaVida';
import Footer from './components/Footer';
import PetsAdocao from './components/PetsAdocao';
import DoacoesOng from './components/DoacoesOng';

function App() {
  return (
    <div className="app">
      <Hero />
        <WhyChooseUs />
      <PetsAdocao />
      <DoacoesOng />
      <SalveUmaVida />
      <Footer />
    </div>
  );
}

export default App;