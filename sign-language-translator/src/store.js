import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const comp = composeEnhancers(applyMiddleware(...middleWare));

const store = configureStore({
    reducer: rootReducer,
    initialState,
    comp
})

export default store;