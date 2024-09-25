import React from 'react';
import icon from '../assets/img/user_icon.png';

const Header = ({ user, showLogin, showRegister }) => {
  return (
    <header className="header">
      <h1 class="logo-text"><span>Global</span>Good</h1>
      
      {showLogin && (
        <a href="/" className='link-icon'>
          <img src={icon} alt="Icon" className='icon'/>
          Sign In
        </a>
      )}

      {showRegister && (
        <a href="/" className='link-icon'>
          <img src={icon} alt="Icon" className='icon'/>
          Sign up
        </a>
      )}

      {user && <div className="user">Olá, {user}</div>}
    </header>
  );
};

export default Header;
