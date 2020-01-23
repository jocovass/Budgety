import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import dbReducer from './db';

export default combineReducers({
    auth: authReducer,
    db: dbReducer,
    form: formReducer,
});