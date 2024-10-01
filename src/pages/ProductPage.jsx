import React from 'react';
import Footer from '../components/Footer'
import Button from '../components/Button';
import ProductImage from '../assets/img/air.png'
import Header from '../components/Header';
import Tabs from '../components/Tabs';

const ProductPage = () => {
  const tabsData = [
    { label: 'Products details', content: 'Este é o conteúdo da Aba 1.' },
    { label: 'Reviews', content: 'Aqui está o conteúdo da Aba 2.' },
  ];
  return (
    <div>
      <Header showLogin />
      
      <main>
        <div class='product-main'>
            <div class='sect-image'>
                <img src={ProductImage} alt="Product"></img>
            </div>

            <div class="sect-infos">
                <h1 class="product-name">Inalsa Air Fryer Fry-Light-1400W</h1>
                <p>Estrelas</p>
                <p class="product-description">AirFry X200: Tenha alimentos crocantes e saudáveis com rapidez! Capacidade de 4L, display digital, 8 funções predefinidas e temperatura ajustável até 200°C. Design compacto e fácil de limpar. Ideal para qualquer cozinha!</p>

                <p class="product-value">R$4.627,00</p>

                <Button placeholder="Adicionar ao Carrinho" class="register-button" route="/" />
            </div>
        </div>
        <div>
            <Tabs tabsData={tabsData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
