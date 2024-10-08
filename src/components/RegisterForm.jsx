import axios from 'axios';
import React, { useState } from 'react';
import Button from './Button'; 

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', {
        name,
        email,
        password,
        user_type_id: 2,
      });

      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
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
          />
        </div>
      </div>
      <div className="buttons">
        <Button type="submit" placeholder="Create Account" className="register-button" />
      </div>
    </form>
  );
};

export default RegisterForm;
