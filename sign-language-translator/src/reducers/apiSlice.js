import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

export const getUser = createAsyncThunk(
  'api/getUser',
  async (payload) => {
    console.log(payload);
    const res = await fetch(`${api_url}/translations?username=${payload.username}`);
    if (res.ok) {
      const user = await res.json();
      return { user: user[0] };
    }
  }
);

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

export const getTranslations = createAsyncThunk(
  'api/getTranslations',
  async (payload) => {
    const res = await fetch(`${api_url}/translations?username=${payload.username}`);
    const user = await res.JSON();
    return { translations: user.translations };
  }
);

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
  reducers: {

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
    [getTranslations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.translations = action.payload.translations;
    },
    [getTranslations.pending]: (state) => {
      state.isLoading = true;
    },
    [getTranslations.rejected]: (state) => {
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

export const { } = apiSlice.actions;
export default apiSlice.reducer;