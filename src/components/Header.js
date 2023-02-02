/**
 * This component is used both in the profile and translate pages 
 */
import './Header.scss'

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const username = useSelector(state => state.api.user.username);
    const isLoading = useSelector(state => state.api.isLoading);

    return (
        <header id='translation-header'>
            <img src='/images/Logo-Hello.png' alt="hello-logo" />
            <Link to='../translate'>
                <h3>Lost in Translation</h3>
            </Link>
            <Link to="../profile">
                {isLoading || username === undefined ? 
                <span className="loader"></span>:
                <h3>{username}</h3>} 
            </Link>
        </header>
    )
}

export default Header;