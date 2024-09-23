// src/pages/Home.js
import React from 'react';
import Header from '../components/Header'; // Importando o componente
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header /> {/* Utilizando o componente */}
      <p>Bem-vindo à página inicial!</p>
      <Footer />
    </div>
  );
};

export default Home;
