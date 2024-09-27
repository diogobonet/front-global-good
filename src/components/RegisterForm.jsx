import React, { useState } from 'react';
import Button from './Button';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para login
    console.log('Name', { name, email, password });
  };

  return (
    <form onSubmit={handleRegister}>
        <div class="text">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
      <div class="inputs">
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
          />
        </div>
      </div>
      <div class="buttons">
        <Button placeholder="Create Account" class="register-button" route="/" />
      </div>
    </form>
  );
};

export default RegisterForm;
