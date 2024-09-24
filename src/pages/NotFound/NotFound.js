import React from 'react';
import Footer from '../../components/Footer'
import Button from '../../components/Button';
import Header from '../../components/Header';
import './notfound.scss'

const NotFound = () => {
  return (
    <div>
      <Header />
      
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
