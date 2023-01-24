import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/apiSlice';

export default configureStore({
    reducer: {
        api: apiReducer
    },
});