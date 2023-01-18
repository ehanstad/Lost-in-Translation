import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import { getUser } from '../actions/apiActions';
import { setCookie } from '../actions/cookieActions';

const usernameConfig = {
  required: true,
  minLength: 1,
}

const LoginForm = props => {

  useEffect(() => {
    console.log(props);
    if (Object.keys(props.cookie).length !== 0)
      window.location.replace("./translate");
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(props);
    props.getUser(data.username);
    const newCookie = new Cookies();
    newCookie.set("session", "active", {maxAge: 10});
    props.setCookie(newCookie);
    //window.location.replace("./translate");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor='username'>Please enter your username</label>
        <input type='text' {...register("username", usernameConfig)} />
        <button type='submit' />
      </fieldset>
    </form>
  )
}

const mapStateToProps = state => ({
  cookie: state.api.cookie,
  user: state.api.user.name,
});

export default connect(mapStateToProps, { getUser, setCookie })(LoginForm);