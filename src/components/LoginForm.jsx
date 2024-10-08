import axios from 'axios';
import React, { useState } from 'react';
import Button from './Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      if (response.data.success) { // Check for successful login response
        setIsLoggedIn(true); // Update login state
        console.log('Login successful, user:', response.data.user);

        // Store relevant user data (e.g., token, ID) in localStorage or cookies
        localStorage.setItem('userToken', response.data.token); // Example using localStorage
      } else {
        console.error('Login failed:', response.data.message); // Handle failed login
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
        <Button placeholder={isLoggedIn ? 'Logged In' : 'Log In'} route="/" />
        <a href="/">Forgot password?</a>
      </div>
    </form>
  );
};

export default LoginForm;