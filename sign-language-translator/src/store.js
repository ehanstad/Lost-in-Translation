import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    initialState,
})

export default store;