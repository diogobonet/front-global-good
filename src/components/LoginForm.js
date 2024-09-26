import React, { useState } from 'react';
import Button from '../components/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para login
    console.log('Login', { email, password });
  };

  return (
    <form onSubmit={handleLogin}>
        <div class="text">
          <h1>Log in to GlobalGood</h1>
          <p>Enter your details below</p>
        </div>
      <div class="inputs">
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
        <Button placeholder="Log In" route="/" />
        <a href="/">Forgot password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
