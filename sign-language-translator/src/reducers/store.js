/**
 * This file configures and exports the store
 */
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';

export default configureStore({
    reducer: {
        api: apiReducer
    },
});