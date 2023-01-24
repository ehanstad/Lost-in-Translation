import './TranslateHeader.scss'

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const TranslateHeader = () => {
    const username = useSelector(state => state.api.user.username);
    return (
        <header id='translation-header'>
            <img src='/images/Logo-Hello.png' alt="hello-logo" />
            <h3>Lost in Traslation</h3>
            <Link to="../profile">
                <h3>{username}</h3>
            </Link>
        </header>
    )
}

export default TranslateHeader;