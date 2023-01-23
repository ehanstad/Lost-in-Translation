import { USER_LOADING, USER_LOADED, ADD_TRANSLATION, DELETE_TRANSLATIONS } from "./types";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

export const getUser = username => {
  return function (dispatch) {
    dispatch({
      type: USER_LOADING,
    });
    fetch(`${api_url}/translations?username=${username}`)
      .then(async response => await response.json())
      .then(results => {
        dispatch({
          type: USER_LOADED,
          payload: results.length === 0 ? { id: "", name: "", translations: [] } : results[0],
        });
      })
      .catch(error => {
        console.log("ERROR " + error);
      })
  }
}

export const addUser = username => {
  return function (dispatch) {
    dispatch({
      type: USER_LOADING,
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'X-API-KEY': api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        translations: []
      })
    }
    fetch(`${api_url}/translations`, requestOptions)
      .then(async response => {
        if (!response.ok) {
          throw new Error('Counld not create new user');
        }
        return await response.json();
      })
      .then(newUser => {
        dispatch({
          type: USER_LOADED,
          payload: newUser,
        });
      })
      .catch(error => console.log(error))
  }
}

export const addTranslation = (translateText, userID) => {
  return function (dispatch) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'X-API-KEY': api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: [translateText]
      })
    }
    dispatch({
      type: USER_LOADING,
    });

    fetch(`${api_url}/translations/${userID}`, requestOptions)
      .then(async response => {
        if (!response.ok) {
          throw new Error('Counld not update translations history');
        }
        return await response.json();
      })
      .then(updatedUser => {
        dispatch({
          type: USER_LOADED,
          payload: updatedUser,
        });
        dispatch({
          type: ADD_TRANSLATION,
          payload: translateText,
        });
      })
      .catch(error => console.log(error))
  }
}

export const deleteTranslations = () => {
  console.log("api_actions");
  return function(dispatch) {
    dispatch({
      type: DELETE_TRANSLATIONS,
    });
  }
}