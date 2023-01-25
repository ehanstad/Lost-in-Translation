/**
 * This file is the api slice, including api calls and reducer handling
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

/**
 * This function gets the user from the specific id and adds it to the reducer
 */
export const getUser = createAsyncThunk(
  'api/getUser',
  async (payload) => {
    const res = await fetch(`${api_url}/translations?username=${payload.username}`);
    if (res.ok) {
      const user = await res.json();
      return { user: user[0] };
    }
  }
);

/**
 * This function posts a new user to the api and adds it to the reducer
 */
export const addUser = createAsyncThunk(
  'api/addUser',
  async (payload) => {
    const res = await fetch(`${api_url}/translations`, {
      method: 'POST',
      headers: {
        'X-API-KEY': api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: payload.username,
        translations: []
      })
    });
    if (res.ok) {
      const user = await res.json();
      return { user };
    }
  }
);

/**
 * This function posts a new translation for a specific user and adds it 
 * to the api and adds it to the reducer as well as setting the new translation
 * as active.
 */
export const addTranslation = createAsyncThunk(
  'api/addTranslation',
  async (payload) => {
    const res = await fetch(`${api_url}/translations/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'X-API-KEY': api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: payload.translations
      })
    });
    if (res.ok) {
      return {
        activeTranslation: payload.translateText,
        translations: payload.translations,
      };
    }
  }
);

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    user: {
      id: "",
      username: "",
      translations: [],
    },
    isLoading: false,
    activeTranslation: "",
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    },
    [addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [addTranslation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.activeTranslation = action.payload.activeTranslation;
      state.user.translations = action.payload.translations;
    },
    [addTranslation.pending]: (state) => {
      state.isLoading = true;
    },
    [addTranslation.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});

export default apiSlice.reducer;