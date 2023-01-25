/**
 * This component is the view for the translate page.
 */
import TranslateForm from '../components/translate/TranslateForm';
import TranslateDisplay from '../components/translate/TranslateDisplay';
import Header from '../components/Header';
import './TranslatePage.scss';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const TranslatePage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const session = cookies.get("session");
    if (!session)
      navigate("../");
  });

  return (
    <div id='translation'>
      <Header />
      <TranslateForm />
      <TranslateDisplay />
    </div>
  )
}

export default TranslatePage;