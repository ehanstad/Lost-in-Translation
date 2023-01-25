/**
 * This component is the view for the translate page.
 */
import TranslateForm from '../components/translate/TranslateForm';
import TranslateDisplay from '../components/translate/TranslateDisplay';
import Header from '../components/Header';
import './TranslatePage.scss';
import { getUser } from '../reducers/apiSlice';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';

const TranslatePage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const session = cookies.get("session");
    if (!session) {
      navigate("../");
    } else {
      dispatch(getUser({ username: session }))
    }
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