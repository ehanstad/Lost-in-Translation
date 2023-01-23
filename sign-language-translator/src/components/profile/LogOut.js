import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import './LogOut.scss';

export const LogOut = props => {

  const { handleSubmit } = useForm();

    const cookies = new Cookies();
    const navigate = useNavigate();

    const onDelete = data => {
        console.log("logout");
        const cookie = cookies.remove("session");
        console.log(cookie);
        navigate("../");
    }

    return (
      <form onSubmit={handleSubmit(onDelete)}>
        <button id='log-out'>Log out</button>
      </form>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)