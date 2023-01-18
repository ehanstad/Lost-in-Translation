import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import cookieReducer from "./cookieReducer";

export default combineReducers({
    api: apiReducer,
    cookie: cookieReducer,
});