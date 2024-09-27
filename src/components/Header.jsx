import React from 'react';
import icon from '../assets/img/user_icon.png';
import { Link } from 'react-router-dom'; 

const Header = ({ user, showRegister }) => {
  const renderAuthLink = () => {
    if (!showRegister) {
      return (
        <Link to="/login" className="link-icon">
          <img src={icon} alt="Login Icon" className="icon" />
          Sign In
        </Link>
      );
    }
    
    if (showRegister) {
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
        <div className="user">
          Olá, {user}
        </div>
      )}
    </header>
  );
};

export default Header;
