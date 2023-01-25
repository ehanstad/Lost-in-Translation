/**
 * This component is the view for the profile page.
 */
import './ProfilePage.scss';
import ProfileHistory from '../components/profile/ProfileHistory';
import LogOut from '../components/profile/LogOut';
import Header from '../components/Header';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProfilePage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const username = useSelector(state => state.api.user.username);

  useEffect(() => {
    const session = cookies.get("session");
    if (!session)
      navigate("../");
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