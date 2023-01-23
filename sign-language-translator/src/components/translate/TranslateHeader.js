import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TranslateHeader.scss'
import { Link } from 'react-router-dom';

export const TranslateHeader = props => {
    return (
        <header id='translation-header'>
            <img src='/images/Logo-Hello.png' alt="hello-logo" />
            <h3>Lost in Traslation</h3>
            <Link to="../profile">
                <h3>{props.user.user.username}</h3>
            </Link>
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