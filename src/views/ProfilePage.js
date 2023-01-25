/**
 * This component is the view for the profile page.
 */
import './ProfilePage.scss';
import ProfileHistory from '../components/profile/ProfileHistory';
import LogOut from '../components/profile/LogOut';
import Header from '../components/Header';
import { getUser } from '../reducers/apiSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProfilePage = () => {
  const cookies = new Cookies();
  const username = useSelector(state => state.api.user.username);
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

  return (
    <>
      <Header />
      <div id='profile'>
        <h1>Hello {username}!</h1>
        <ProfileHistory />
        <LogOut />
      </div>
    </>
  )
}

export default ProfilePage;