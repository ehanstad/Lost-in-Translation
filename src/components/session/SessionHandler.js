/**
 * This component is responsible for tanking care of the session
 */
import { getUser } from '../../reducers/apiSlice';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const SessionHandler = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const session = cookies.get("session");
    if (!session) {
      navigate("../");
    } else {
      dispatch(getUser({ username: session }))
    }
  });

  return (<></>);
};

export default SessionHandler;