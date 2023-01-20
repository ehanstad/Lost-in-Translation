import { USER_LOADING, USER_LOADED, ADD_TRANSLATION } from "../actions/types";

const initialState = {
    user: {
        user: {
            id: "",
            name: "",
            translations: [],
        },
        isLoading: false,
    },
    activeTranslation: "",
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
                    user: action.payload,
                    isLoading: false,
                }
            }
        case ADD_TRANSLATION:
            return {
                ...state,
                activeTranslation: action.payload,
            }
        default:
            return state;
    }
}