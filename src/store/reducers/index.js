import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import dbReducer from './db';
import appReducer from './app';

export default combineReducers({
    auth: authReducer,
    db: dbReducer,
    app:appReducer,
    form: formReducer,
});