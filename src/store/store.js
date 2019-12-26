import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import combinedReducer from './reducers/index';

const composeEnhancer = process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        : null || compose;

const store = createStore(combinedReducer, 
              composeEnhancer(applyMiddleware(reduxThunk)));

export default store;