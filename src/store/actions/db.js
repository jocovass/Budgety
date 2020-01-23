import { db } from '../../config/firebase';
import * as actionTypes from './actionTypes';

const getUserData = () => (
    {
        type: actionTypes.GET_USER_DATA,
        payload: {
            loading: true,
        }
    }
);

const getUserDataSuccees = (data) => (
    {
        type: actionTypes.GET_USER_DATA_SUCCEES,
        payload: {
            loading: false,
            ...data
        }
    }
);

const getUserDataFail = (error) => (
    {
        type: actionTypes.GET_USER_DATA_FAIL,
        payload: {
            error,
            loading: false,
        }
    }
);

const addItem = () => (
    {
        type: actionTypes.ADD_ITEM,
        payload: {
            loading: true,
        }
    }
);

const addItemSuccees = () => (
    {
        type: actionTypes.ADD_ITEM_SUCCEES,
        payload: {
            loading: false,
            error: false,
        }
    }
);

const addItemFail = (error) => (
    {
        type: actionTypes.ADD_ITEM_FAIL,
        payload: {
            loading: false,
            error,
        }
    }
);

export const emptyAppState = () => (
    {   
        type: actionTypes.EMPTY_APP_STATE,
        payload: {
            loading: false,
            totalBudget: 0,
            totalIncome: 0,
            totalExpense: 0,
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
        }  
    }
);

// When the user is logged in we listen for all it's data
export const listenForUserData = (userId) => (dispatch) => {
    dispatch(getUserData());

    const userRef = db.collection('users').doc(userId);
    return userRef.onSnapshot(
        (doc) => {
            dispatch(getUserDataSuccees(doc.data()));
        }, (error) => dispatch(getUserDataFail(error))
    );
};

// Add new transaction item
export const onAddItem = (data, userId) => (dispatch) => {
    dispatch(addItem());

    const userRef = db.collection('users').doc(userId);
    userRef.set(data, { merge: true })
        .then(resp => dispatch(addItemSuccees()))
        .catch(error => dispatch(addItemFail(error)));
}