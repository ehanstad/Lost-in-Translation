import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/Logo-Hello.png';
import './TranslateHeader.scss'

export const TranslateHeader = props => {
    useEffect(() => {
        //setUser(props.user);
        setUser("Dewald");
    });

    const [user, setUser] = useState();

    return (
        <header id='translation-header'>
            <img src={logo} alt="hello-logo" />
            <h3>Lost in Traslation</h3>
            <h3>{user}</h3>
        </header>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TranslateHeader);