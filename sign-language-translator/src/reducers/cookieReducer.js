import { SET_COOKIE } from "../actions/types";

const initialState = {
    cookie: {},
    user: {
        name: "",
        isLoading: false,
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_COOKIE:
            return {
                ...state,
                cookie: action.payload
            }
        default:
            return state;
    }
}