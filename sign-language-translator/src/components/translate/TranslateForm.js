import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { translate } from '../../actions/apiActions';

export const TranslateForm = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.translate(data.translateText);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input placeholder="Translate" type='text' {...register("translateText")}/>
        <button type='submit'>
          <img id='btn-arrow' src='https://cdn.iconscout.com/icon/free/png-256/arrow-forward-ios-1782295-1514145.png' />
        </button>
      </fieldset>
    </form>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TranslateForm);