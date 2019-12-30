import { SubmissionError } from 'redux-form';
import * as actionTypes from './actionTypes';
import { app } from '../../config/firebase';
import history from '../../history';

const signIn = () => (
    {
        type: actionTypes.SIGN_IN,
        payload: {
            loading: true,
        }
    }
);

const signOut = () => (
    {
        type: actionTypes.SIGN_OUT,
        payload: {
            loading: true,
        }
    }
);

const signUpFail = (error) => (
    {
        type: actionTypes.SIGN_UP_FAIL,
        payload: {
            error,
            loading: false,
        }
    }
);

const signInFail = (error) => (
    {
        type: actionTypes.SIGN_IN_FAIL,
        payload: {
            error,
            loading: false,
        }
    }
);

const signOutFail = (error) => (
    {
        type: actionTypes.SIGN_OUT_FAIL,
        payload: {
            error,
            loading: false,
        }
    }
);

const signUpSuccees = (userName) => (
    {
        type: actionTypes.SIGN_UP_SUCCEES,
        payload: {
            userName,
        }
    }
);

export const signInSuccees = (userName, userId, token) => (
    {
        type: actionTypes.SIGN_IN_SUCCEES,
        payload: {
            userName, 
            userId, 
            token,
            loading: false,
            signedIn: true,
        }
    }
);

export const signOutSuccees = () => (
    {
        type: actionTypes.SIGN_OUT_SUCCEES,
        payload: {
            userName: null,
            userId: null,
            token: null,
            loading: false,
            verified: false,
            signedIn: false,
        }
    }
);

export const emailVerified = () => (
    {
        type: actionTypes.EMAIL_VERIFIED,
        payload: {
            verified: true,
        }
    }
);

// Create user
export const createUser = ({ name, email, password }) => dispatch => {
    dispatch(signIn);
    return app.auth().createUserWithEmailAndPassword(email, password)
        .then(resp => {
            // Updateing the profile with the username and saveing it in our app states.
            resp.user.updateProfile({
                displayName: name,
            })
            .then(() => dispatch(signUpSuccees(resp.user.displayName)));
            // 1 Send verification email
            sendVerificationEmail();
            // 2 set up the expiration date after the account will log out automaticaly
        })
        .catch(error => {
            dispatch(signUpFail(error.message));
            throw new SubmissionError({
                email: 'This email address is in use already.',
                _error: 'Signup has failed.',
            });
        });
};

// Login
export const onSignIn = ({ email, password }) => dispatch => {
    dispatch(signIn());
    return app.auth().signInWithEmailAndPassword(email, password)
        .then(resp => {
            // we will dispatch a timeout to check our login period
        })
        .catch(error => {
            dispatch(signInFail());
            let prop = null;
            let message = null;
            if(error.code.includes('password')) {
                prop = 'password';
                message = 'Wrong password.'
            } else {
                prop = 'email';
                message = 'There is no match for this email.'
            }

            throw new SubmissionError({
                [prop]: message,
                _error: 'Login has failed.',
            })
        })
};

// Logout
export const onSignOut = () => dispatch => {
    dispatch(signOut);
    return app.auth().signOut()
        .then(resp => {
            history.replace('/');
            dispatch(signOutSuccees());
        })
        .catch(error => dispatch(signOutFail(error.message)));
};

// Send verification email to the user
export const sendVerificationEmail = () => {
    const config = {
        url: `${process.env.PUBLIC_URL}/?email=${app.auth().currentUser.email}`,
        handleCodeInApp: true,
    };
    app.auth().sendVerificationEmail(config)
        .catch(error => console.log(error));
};