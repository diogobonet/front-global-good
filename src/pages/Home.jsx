// src/pages/Home.js
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Product from '../components/Product';
import image from '../assets/img/air.png'

const product = {
  image: image,
  name: 'Inalsa Air Fryer Fry-Light-1400W',
  price: 4627.00,  // Preço em reais
  discount: 20     // Percentual de desconto
};

const Home = () => {
  return (
    <div>
      <Header showLogin /> {/* Utilizando o componente */}
      <main class="home-main">
        <p>Bem-vindo à página inicial!</p>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
