/**
 * This component is used both in the profile and translate pages 
 */
import './Header.scss'

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const usernameState = useSelector(state => state.api.user.username);
    let username = usernameState;

    useEffect(() => {
        username = usernameState;
    }, [usernameState]);

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

export default Header;