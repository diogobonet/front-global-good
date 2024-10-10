import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento
import axios from 'axios';
import Button from './Button';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', {
        name,
        email,
        password,
        user_type_id: 2
      });

      if (response.status === 201) { // Verifica se o status é de criação
        console.log('User created:', response.data);
        navigate('/login'); // Redireciona para a página de login após sucesso
      } else {
        console.error('Error creating user:', response.data);
        setErrorMessage('Error creating user, please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Error creating user, please try again.');
      } else {
        setErrorMessage('Network error, please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="text">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
      </div>
      <div className="inputs">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        title="Password must be at least 8 characters, contain at least one special character, one uppercase and one lowercase letter"
        />
        </div>
      </div>
      <div className="buttons">
        <Button type="submit" placeholder="Create Account" className="register-button" />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Mostra mensagem de erro se houver */}
    </form>
  );
};

export default RegisterForm;
