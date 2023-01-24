import React from 'react';
import TranslateForm from '../components/translate/TranslateForm';
import TranslateDisplay from '../components/translate/TranslateDisplay';
import TranslateHeader from '../components/translate/TranslateHeader';
import './TranslatePage.scss';

const TranslatePage = () => {

  return (
    <div id='translation'>
      <TranslateHeader />
      <TranslateForm />
      <TranslateDisplay />
    </div>
  )
}

export default TranslatePage;