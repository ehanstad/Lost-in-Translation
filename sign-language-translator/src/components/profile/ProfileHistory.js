import './ProfileHistory.scss';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addTranslation } from '../../reducers/apiSlice';

let keyCounter = 0;
const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

export const ProfileHistory = () => {
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
                    <p key={keyCounter++}>{translation}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit(onDelete)}>
                <button>Delete history</button>
            </form>
        </div>
    )
}

export default ProfileHistory;