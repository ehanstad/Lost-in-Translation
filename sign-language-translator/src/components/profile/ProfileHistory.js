import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export const ProfileHistory = (props) => {

    useEffect(() => {
        console.log(props)
    }, []);

    const handleDelete = e => {
        console.log("click")
        //e.preventDefault();
    }

    const translationHistory = props.user.user.translation.map(translation => (
        <p>{translation}</p>
    ));

    return (
        <div>
            <h3>
                Profile History
            </h3>
            <div>
                {translationHistory}
            </div>
            <button onClick={handleDelete()}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.api.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHistory);