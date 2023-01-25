/**
 * This component is the view for the profile page.
 */
import './ProfilePage.scss';
import ProfileHistory from '../components/profile/ProfileHistory';
import LogOut from '../components/profile/LogOut';
import Header from '../components/Header';
import SessionHandler from '../components/session/SessionHandler';

import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const username = useSelector(state => state.api.user.username);

  return (
    <>
      <SessionHandler />
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