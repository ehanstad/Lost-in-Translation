import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { deleteTranslations } from '../../actions/apiActions';
import PropTypes from 'prop-types';
import './ProfileHistory.scss';

let keyCounter = 0;

export const ProfileHistory = (props) => {

    const { handleSubmit } = useForm();

    const onDelete = data => {
        deleteTranslations();
    }

    return (
        <div id='profile-history'>
            <h3>
                Profile History
            </h3>
            <div>
                {props.user.translations.map(translation => (
                    <p key={keyCounter++}>{translation}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit(onDelete)}>
                <button>Delete history</button>
            </form>
        </div>
    )
}

ProfileHistory.protoTypes = {
    deleteTranslations: PropTypes.func.isRequired,
    user: PropTypes.object,
  }

const mapStateToProps = (state) => ({
    user: state.api.user.user,
});

const mapDispatchToProps = { deleteTranslations };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHistory);