// src/pages/Home.js
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Product from '../components/Product';
import image from '../assets/img/air.png';
import Search from '../components/SearchInput';

const product = {
  image: image,
  name: 'Inalsa Air Fryer Fry-Light-1400W',
  price: 4627.00,
  discount: 20    
};

const Home = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search for:', searchTerm);
  };

  return (
    <div>
      <Header showLogin /> {/* Utilizando o componente */}
      <main class="home-main">
        <section className="infos-header">
          <div class="city-chip">
            <span class="material-symbols-outlined">location_on</span>
            <p>Curitiba, PR</p>
          </div>
          <Search onSearch={handleSearch} />
        </section>
        <h1>hot deals for you</h1>
        <section class="product-div">
          <Product product={product} route="/product" />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
