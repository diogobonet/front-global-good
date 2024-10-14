import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/me', {
        email,
        password,
      });

      // Armazenar o token JWT no localStorage
      localStorage.setItem('token', response.data.access_token);

      // Redirecionar para a página protegida após login bem-sucedido
      navigate('/');
    } catch (error) {
      // Tratar erro de autenticação
      if (error.response && error.response.status === 401) {
        setErrorMessage('Credenciais inválidas. Tente novamente.');
      } else {
        setErrorMessage('Ocorreu um erro. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="text">
        <h1>Log in to GlobalGood</h1>
        <p>Enter your details below</p>
      </div>
      <div className="inputs">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="buttons">
        {errorMessage && <p className="error">{errorMessage}</p>} {/* Exibe a mensagem de erro */}
        <Button type="submit" placeholder={"Sign In"} route="/" />
        <a href="/">Forgot password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
