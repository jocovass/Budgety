import * as actionTypes from '../actions/actionTypes';
import { mergeObj } from '../../utilities/utility';

const INITIAL_STATE = {
    loading: false,
    totalBudget: 0,
    totalIncome: 0,
    totalExpense: 0,
    totalIncomes: {
        salary: 0,
        gift: 0,
        win: 0,
    },
    totalCosts: {
        groceries: 0,
        pet: 0,
        bill: 0,
        holiday: 0,
        rent: 0,
        entertainment: 0,
        beautycare: 0,
        facilities: 0,
    },
    recentActivities: [],
    years: {},
    error: null,
    selectedYear: '2020',
};

const updateState = (state, newState) => {
    return mergeObj(state, newState);
};

const dbReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_USER_DATA: return updateState(state, action.payload);
        case actionTypes.GET_USER_DATA_SUCCESS: return updateState(state, action.payload);
        case actionTypes.GET_USER_DATA_FAIL: return updateState(state, action.payload);
        case actionTypes.UPDATE_SELECTED_YEAR: return updateState(state, action.payload);
        case actionTypes.EMPTY_APP_STATE: return updateState(state, action.payload);
        default: return state;
    }
};

export default dbReducer;