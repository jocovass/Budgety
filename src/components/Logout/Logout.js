import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { onSignOut } from '../../store/actions/auth';
import { listenForUserData, emptyAppState } from '../../store/actions/db';
import Button from '../ui/Button/Button';

const Logout = ({ onSignOut, signedIn, userId, listenForUserData, emptyAppState }) => {
    let unsubscribe = useRef(null);

    useEffect(() => {
        if(signedIn) {
            unsubscribe.current = listenForUserData(userId);
        }

        return () => {
            unsubscribe.current();
            emptyAppState();
        };
    }, [signedIn, listenForUserData, userId, emptyAppState]);
        
      

    return <Button value='Logout' click={onSignOut}/>;
};

const mappStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        userId: state.auth.userId,
    };
};

export default connect(mappStateToProps, { onSignOut, listenForUserData, emptyAppState })(Logout);