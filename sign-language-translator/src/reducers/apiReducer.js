import { USER_LOADING, USER_LOADED, ADD_TRANSLATION, DELETE_TRANSLATIONS } from "../actions/types";

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
        case DELETE_TRANSLATIONS:
            console.log("api_reducer");
            return {
                ...state,
                user: {
                    ...state.user,
                    user: {
                        ...state.user.user,
                        translations: [],
                    }
                }
            }
        default:
            return state;
    }
}