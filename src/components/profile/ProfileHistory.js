/**
 * This component displays the users translation history as well as
 * handling deletion of the same.
 */
import './ProfileHistory.scss';
import { addTranslation } from '../../reducers/apiSlice';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


export const ProfileHistory = () => {
    let keyCounter = 0;
    const user = useSelector(state => state.api.user);
    const dispatch = useDispatch();
    const { handleSubmit } = useForm();

    const onDelete = () => {
        dispatch(addTranslation({
            id: user.id,
            translations: [],
            translateText: "",
        }));
    }

    return (
        <div id='profile-history'>
            <h3>
                Profile History
            </h3>
            <div>
                {user.translations.map(translation => (
                    keyCounter < 10 ?
                    <li key={keyCounter++}>{translation}</li> :
                    ""
                ))}
            </div>
            <form onSubmit={handleSubmit(onDelete)}>
                <button>Delete history</button>
            </form>
        </div>
    )
}

export default ProfileHistory;