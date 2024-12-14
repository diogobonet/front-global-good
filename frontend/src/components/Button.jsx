// src/components/Button.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ type, placeholder, route }) => {
  const navigate = useNavigate(); // Hook para navegação programática

  const handleClick = () => {
    navigate(route); // Navegar para a rota fornecida
  };

  return (
    <button type={type} className='buttonMain' onClick={handleClick}>
      {placeholder} {/* Exibe o texto passado como prop */}
    </button>
  );
};

export default Button;
