import React from 'react';
import Footer from '../components/Footer'
import Button from '../components/Button';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div>
      <Header />
      
      <main>
        <div className='notfound'>
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Button placeholder="Back to home page" route="/" /> 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
