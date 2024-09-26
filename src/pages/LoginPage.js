import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate title="">
        {<LoginForm /> }
    </AuthTemplate>
  );
};

export default LoginPage;
