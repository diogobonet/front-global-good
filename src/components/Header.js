import React from 'react';

const Header = ({ user, showLogin, showRegister }) => {
  return (
    <header className="header">
      <h1 class="logo-text"><span>Global</span>Good</h1>

      {/* Exibe o botão de login */}
      {showLogin && (
        <button className="button" onClick={() => alert('Login')}>
          Login
        </button>
      )}

      {/* Exibe o botão de registro */}
      {showRegister && (
        <button className="button" onClick={() => alert('Registrar')}>
          Registrar
        </button>
      )}

      {/* Exibe o nome do usuário */}
      {user && <div className="user">Olá, {user}</div>}
    </header>
  );
};

export default Header;
