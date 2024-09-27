import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate title="" showRegister={false}>
        <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
