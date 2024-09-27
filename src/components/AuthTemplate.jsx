import React from 'react';
import Header from './Header';
import Image from '../assets/img/auth_img.png'
import Footer from './Footer'

const AuthTemplate = ({ title, children, showRegister }) => {
  return (
    <div className="auth-container">
        <Header showRegister={showRegister}/>

        <section className="auth-main">
            <section class="sect-left">
                <img src={Image} alt="Cellphone"/>
            </section>
            <section className="auth-box">
                <h2>{title}</h2>
                {children} {}
            </section>
        </section>

        <Footer />
    </div>
  );
};

export default AuthTemplate;
