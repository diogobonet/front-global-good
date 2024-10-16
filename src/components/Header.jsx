import React, { useEffect, useState } from 'react';
import icon from '../assets/img/user_icon.png';
import { Link } from 'react-router-dom';
import 'jwt-decode'; // sem chaves
import { jwtDecode } from 'jwt-decode';
import UserDropdown from './UserDropdown';

const Header = ({ showRegister }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken.name); // Supondo que o campo 'name' contém o nome do usuário no JWT
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  const renderAuthLink = () => {
    if (!user && !showRegister) {
      return (
        <Link to="/login" className="link-icon">
          <img src={icon} alt="Login Icon" className="icon" />
          Sign In
        </Link>
      );
    }

    if (!user && showRegister) {
      return (
        <Link to="/register" className="link-icon">
          <img src={icon} alt="Register Icon" className="icon" />
          Sign Up
        </Link>
      );
    }

    return null;
  };

  return (
    <header className="header">
      <h1 className="logo-text">
        <Link to="/"><span>Global</span>Good</Link>
      </h1>

      {renderAuthLink()}

      {user && (
        <UserDropdown userName={user} />
      )}
    </header>
  );
};

export default Header;
