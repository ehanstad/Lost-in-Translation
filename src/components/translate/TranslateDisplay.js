/**
 * This is a component displays the translation images
 */
import './TranslateDisplay.scss'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const img_url = '/images/';
let key_counter = 0;

export const TranslateDisplay = () => {
  const [translations, setTranslations] = useState("");
  const activeTranslation = useSelector(state => state.api.activeTranslation);
  const isLoading = useSelector(state => state.api.isLoading);

  useEffect(() => {
    setTranslations(activeTranslation);
  }, [activeTranslation, isLoading]);

  const translationImages = Array.from(translations.toLowerCase()).map(char => (
    char.search(/[a-z]/) !== -1 ?
      <img alt={char} src={img_url + char + '.png'} key={key_counter++} className='translate-img' /> :
      <br key={key_counter++} />
  ));

  return (
    <div id='translate-display'>
      {isLoading || isLoading === undefined ?
      <span className="loader"></span> :
      translationImages}
    </div>
  )
}

export default TranslateDisplay;