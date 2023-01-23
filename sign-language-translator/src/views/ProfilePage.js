import React from 'react';
import './ProfilePage.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileHistory from '../components/profile/ProfileHistory';
import LogOut from '../components/profile/LogOut';
import TranslateHeader from '../components/translate/TranslateHeader'

const ProfilePage = props => {
  return (
    <>
    <TranslateHeader />
    <div id='profile'>
      <h1>Hello {props.user.user.username}!</h1>
      <ProfileHistory />
      <LogOut />
    </div>
    </>
  )
}

ProfilePage.protoTypes = {
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  user: state.api.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);