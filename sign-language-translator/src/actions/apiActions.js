import { USER_LOADING, USER_LOADED } from "./types";

const URL = "noroff-assignment-api-production-49c6.up.railway.app";

export const getUser = username => {
  return function(dispatch) {
    dispatch({
      type: USER_LOADING,
    });
    dispatch({
      type: USER_LOADED,
      payload: username,
    });
    console.log(`${URL}/translations?username=${username}`);
    fetch(`${URL}/translations?username=${username}`)
      .then(response => response.json())
      .then(results => {
        console.log(results);
      })
      .catch(error => {
        console.log("ERROR " + error);
      })
  }
}

export const translate = (addTranslation, userID) => {
  return function(dispatch) {
    fetch(`${URL}/translations?username=${userID}`)
      .then(response => response.json())
      .then(results => {
          dispatch({
            type: ADD_TRANSLATION,
            payload: results,
          });
      })
      .catch(error => {
        console.log("ERROR " + error);
      })
  }
}