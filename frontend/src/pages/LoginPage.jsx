import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate title="" showRegister={true}>
        {<LoginForm /> }
    </AuthTemplate>
  );
};

export default LoginPage;
