import * as actionTypes from '../actions/actionTypes';
import { mergeObj } from '../../utilities/utility';

const INITIAL_STAT = {
    userName: null,
    userId: null,
    token: null,
    error: null,
    loading: false,
    verified: false,
    signedIn: false,
};

const updateState = (state, newState = {}) => {
    return mergeObj(state, newState);
};

function authReducer(state = INITIAL_STAT, action) {
    switch(action.type) {
        case actionTypes.SIGN_IN: return updateState(state, action.payload);
        case actionTypes.SIGN_OUT: return updateState(state, action.payload);
        case actionTypes.SIGN_IN_FAIL: return updateState(state, action.payload);
        case actionTypes.SIGN_OUT_FAIL: return updateState(state, action.payload);
        case actionTypes.SIGN_IN_SUCCEES: return updateState(state, action.payload);
        case actionTypes.SIGN_OUT_SUCCEES: return updateState(state, action.payload);
        case actionTypes.SIGN_UP_SUCCEES : return updateState(state, action.payload);
        case actionTypes.SIGN_UP_FAIL: return updateState(state, action.payload);
        default: return state;
    }
}

export default authReducer;