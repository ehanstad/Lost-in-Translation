import './LoginForm.scss';
import { getUser, addUser } from '../../reducers/apiSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const user = useSelector(state => state.api.user);

  useEffect(() => {
    const session = cookies.get("session");
    if (session)
      navigate("./translate");
  },[]);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async data => {
    dispatch(getUser({ username: data.username }))
      .then(res => {
        console.log(res.payload.user.id);
        if (!res.payload.user.id)
          dispatch(addUser(data.username));
        //cookies.set("session", data.username, {maxAge: 10000});
        navigate("./translate");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input placeholder="What's your name?" type='text' {...register("username", usernameConfig)} />
        <button type='submit'>
          <img id='btn-arrow' src='https://cdn.iconscout.com/icon/free/png-256/arrow-forward-ios-1782295-1514145.png' />
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm;