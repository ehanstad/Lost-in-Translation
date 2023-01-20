import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addTranslation } from '../../actions/apiActions';
import './TranslateForm.scss';

export const TranslateForm = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    props.addTranslation(data.translateText, props.user.user.id);
    console.log(props);
  }

  return (
    <div id='translate-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input placeholder="Translate" type='text' {...register("translateText")} />
          <button type='submit'>
            <img id='btn-arrow' src='https://cdn.iconscout.com/icon/free/png-256/arrow-forward-ios-1782295-1514145.png' />
          </button>
        </fieldset>
      </form>
    </div>
  )
}

TranslateForm.protoTypes = {
  addTranslation: PropTypes.func.isRequired,
  user: PropTypes.object,
  activeTranslation: PropTypes.string,
}

const mapStateToProps = (state) => ({
  user: state.api.user,
  activeTranslation: state.api.activeTranslation,
});

const mapDispatchToProps = { addTranslation };

export default connect(mapStateToProps, mapDispatchToProps)(TranslateForm);