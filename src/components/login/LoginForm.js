/**
 * This component handels all the logic when it comes to the login
 */
import './LoginForm.scss';
import { getUser, addUser } from '../../reducers/apiSlice';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const usernameConfig = {
  required: true,
  minLength: 1,
}

const LoginForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    dispatch(getUser({ username: data.username }))
      .then(res => {
        if (res.payload.user === undefined)
          dispatch(addUser({ username: data.username }));
        cookies.set("session", data.username, { maxAge: 10000 });
        navigate("./translate");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input placeholder="What's your name?" type='text' {...register("username", usernameConfig)} />
        <button type='submit'>
          <img id='btn-arrow' alt='logo' src='https://cdn.iconscout.com/icon/free/png-256/arrow-forward-ios-1782295-1514145.png' />
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm;