/**
 * This component is responible for the logic when it comes to handling the
 * translations.
 */
import './TranslateForm.scss';
import { addTranslation } from '../../reducers/apiSlice';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const TranslateForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.api.user);
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    let newTranslations = [...user.translations, data.translateText];
    dispatch(addTranslation({
      translateText: data.translateText,
      id: user.id,
      translations: newTranslations
    }));
  }

  return (
    <div id='translate-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input placeholder="Translate" type='text' {...register("translateText")} />
          <button type='submit'>
            <img id='btn-arrow' alt='btn-arrow' src='https://cdn.iconscout.com/icon/free/png-256/arrow-forward-ios-1782295-1514145.png' />
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default TranslateForm;