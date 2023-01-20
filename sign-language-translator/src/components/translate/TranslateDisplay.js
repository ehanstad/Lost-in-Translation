import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TranslateDisplay.scss'

const img_url = '/images/';
let key_counter = 0;

export const TranslateDisplay = props => {
  const[translations, setTranslations] = useState("");
  
  useEffect(() => {
    console.log(props);
    setTranslations(props.activeTranslation);
  },[props.activeTranslation]);
  
  const translationImages = Array.from(translations.toLowerCase()).map(char => (
    char.search(/[a-z]/) !== -1 ?
    <img src={img_url + char + '.png'} key={key_counter++} className='translate-img' /> :
    <br key={key_counter++} />
  ));

  return (
    <div id='translate-display'>
      { translationImages }
    </div>
  )
}

TranslateDisplay.protoTypes = {
  user: PropTypes.object,
  activeTranslation: PropTypes.string,
}

const mapStateToProps = state => ({
  user: state.api.user.user,
  activeTranslation: state.api.activeTranslation,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TranslateDisplay);