import * as actionTypes from '../actions/actionTypes';
import { mergeObj } from '../../utilities/utility';

const INITIAL_STATE = {
    menuIsOpen: false,
};

const updateState = (state, newState = {}) => {
    return mergeObj(state, newState);
};

function appReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case actionTypes.TOGGLE_MENU: return updateState(state, action.payload);
        default: return state;
    }
}

export default appReducer;