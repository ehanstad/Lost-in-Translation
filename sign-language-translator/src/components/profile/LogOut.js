import './LogOut.scss';

import React from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {

  const { handleSubmit } = useForm();

    const cookies = new Cookies();
    const navigate = useNavigate();

    const onDelete = () => {
        const cookie = cookies.remove("session");
        navigate("../");
    }

    return (
      <form onSubmit={handleSubmit(onDelete)}>
        <button id='log-out'>Log out</button>
      </form>
    )
}

export default LogOut;