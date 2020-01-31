import * as actionTypes from './actionTypes';

export const toggleMenu = (isOpen) => {
    return {
        type: actionTypes.TOGGLE_MENU,
        payload: {
            menuIsOpen: isOpen,
        }
    };
};