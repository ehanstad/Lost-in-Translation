/**
 * This component is the view for the translate page.
 */
import TranslateForm from '../components/translate/TranslateForm';
import TranslateDisplay from '../components/translate/TranslateDisplay';
import Header from '../components/Header';
import './TranslatePage.scss';

import React from 'react';
import SessionHandler from '../components/session/SessionHandler';

const TranslatePage = () => {

  return (
    <div id='translation'>
      <SessionHandler />
      <Header />
      <TranslateForm />
      <TranslateDisplay />
    </div>
  )
}

export default TranslatePage;