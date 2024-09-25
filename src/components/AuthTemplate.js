import React from 'react';
import Header from '../components/Header';
import Image from '../assets/img/auth_img.png'
import Footer from '../components/Footer'

const AuthTemplate = ({ title, children }) => {
  return (
    <div className="auth-container">
        <Header showRegister/>

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
