import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import { getUser } from '../../actions/apiActions';
import './LoginForm.scss';

const usernameConfig = {
  required: true,
  minLength: 1,
}

const LoginForm = props => {

  useEffect(() => {
    const allCookies = document.cookie;
    if (allCookies)
      console.log("COOKIE");
      //window.location.replace("./translate");
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    props.getUser(data.username);
    const newCookie = new Cookies();
    newCookie.set("session", data.username, {maxAge: 100});
    //window.location.replace("./translate");
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

const mapStateToProps = state => ({
  user: state.api.user.name,
});

export default connect(mapStateToProps, { getUser })(LoginForm);