import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';

const RegisterPage = () => {
  return (
    <AuthTemplate title="Registrar">
        <Header showLogin/>
        <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
