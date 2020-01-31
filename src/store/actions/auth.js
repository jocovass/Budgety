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

const signUpSuccess = (userName) => {
    console.log('signup');
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        payload: {
            userName,
        }
    }
};

export const signInSuccess = (userName, userId, token) => (
    {
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: {
            userName, 
            userId, 
            token,
            loading: false,
            signedIn: true,
        }
    }
);

export const signOutSuccess = () => (
    {
        type: actionTypes.SIGN_OUT_SUCCESS,
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

const passRecoveryStart = () => (
    {
        type: actionTypes.PASS_RECOVERY_START,
        payload: {
            loading: true,
        }
    }
);

const passRecoveryFinish = () => (
    {
        type: actionTypes.PASS_RECOVERY_FINISH,
        payload: {
            loading: false,
        }
    }
);

// Create user
export const createUser = ({ name, email, password }) => dispatch => {
    dispatch(signIn());
    return app.auth().createUserWithEmailAndPassword(email, password)
        .then(resp => {
            // Updateing the profile with the username and saveing it in our app states.
            resp.user.updateProfile({
                displayName: name,
            })
            .then(() => {
                dispatch(signUpSuccess(resp.user.displayName))
            });
            // 1 Send verification email
            dispatch(sendVerificationEmail());
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
            dispatch(signOutSuccess());
        })
        .catch(error => dispatch(signOutFail(error.message)));
};

// Send verification email to the user
export const sendVerificationEmail = () => dispatch => {
    const config = {
        url: `http://localhost:3000/?email=${app.auth().currentUser.email}`,
        handleCodeInApp: true,
    };
    app.auth().currentUser.sendEmailVerification(config)
        .catch(error => console.log(error));
};

// Send password recovery email to the users email
export const sendPasswordResetEmail = ({ email }) => dispatch => {
    dispatch(passRecoveryStart());
    return app.auth().sendPasswordResetEmail(email)
        .then(() => dispatch(passRecoveryFinish()))
        .catch(error => {
            dispatch(passRecoveryFinish());
            throw new SubmissionError({
                email: 'This email is not registred.',
                _error: 'Something went wrong.',
            });
        });
};