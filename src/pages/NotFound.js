// src/pages/Home.js
import React from 'react';
import Footer from '../components/Footer'
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div>
      <header>
          <h1><span>Global</span>Good</h1>
      </header>
      <main>
        <div class='notfound'>
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
        </div>

        <Button placeholder="Back to home page" route="/" /> 
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
