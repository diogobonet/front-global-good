import React from 'react';
import '../styles/_header.scss';

const Footer = () => {
  return (
    <footer>
      <h1><span>Global</span>Good</h1>
      <div className='links'>
          <a href='/'>About Us</a>
          <a href='/'>Contact</a>
          <a href='/'>Help</a>
      </div>

      <div className='dropdown'>
        <p>Language English</p>
      </div>
    </footer>
  );
};

export default Footer;
