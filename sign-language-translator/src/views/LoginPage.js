/**
 * This component is the view for the start page.
 */
import './LoginPage.scss';
import LoginForm from '../components/login/LoginForm';

import React from 'react';

const LoginPage = () => {

  return (
    <div id='login'>
      <header>
        <h3>Lost in Traslation</h3>
      </header>
      <div id='login-body'>
        <div id='login-img-container'>
          <img id='logo' src='/images/Logo.png' alt='logo' />
        </div>
        <div id='login-container'>
          <h1>Lost in Traslation</h1>
          <h2>Get started</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;