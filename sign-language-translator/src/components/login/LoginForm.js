import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import { getUser, addUser } from '../../actions/apiActions';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const usernameConfig = {
  required: true,
  minLength: 1,
}


const LoginForm = props => {
  const cookies = new Cookies();
  const navigate = useNavigate();

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

  const onSubmit = data => {
    props.getUser(data.username);
    console.log(props.user);
    console.log(data);
    //if (!props.user.id)
      //props.addUser(data.username);
    cookies.set("session", data.username, {maxAge: 10000});
    navigate("./translate");
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

LoginForm.protoTypes = {
  getUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  user: state.api.user.user,
});

const mapDispatchToProps = { getUser, addUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);