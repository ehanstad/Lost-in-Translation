import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/Logo-Hello.png';
import PropTypes from 'prop-types';
import './TranslateHeader.scss'

export const TranslateHeader = props => {
    return (
        <header id='translation-header'>
            <img src={logo} alt="hello-logo" />
            <h3>Lost in Traslation</h3>
            <h3>{props.user.username}</h3>
        </header>
    )
}

TranslateHeader.protoTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    user: state.api.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TranslateHeader);