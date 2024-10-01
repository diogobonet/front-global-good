// src/components/Button.js
import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { image, name, price, discount } = product;

  // Formatação para o preço em reais
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className="price-div">
        <p className="product-price">{formattedPrice}</p>
        <p className="product-discount" style={{ color: 'red' }}>
          {discount}% off
        </p>
      </div>
    </div>
  );
};

export default Product;
