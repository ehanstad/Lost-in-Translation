import { USER_LOADING, USER_LOADED } from "../actions/types";

const initialState = {
    cookie: {},
    user: {
        name: "",
        isLoading: false,
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: true,
                }
            }
        case USER_LOADED:
            return {
                ...state,
                user: {
                    name: action.payload,
                    isLoading: false,
                }
            }
        default:
            return state;
    }
}