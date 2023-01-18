import { USER_LOADING, USER_LOADED } from "./types";

export const getUser = username => {
  return function (dispatch) {
    dispatch({
      type: USER_LOADING,
    });
    dispatch({
      type: USER_LOADED,
      payload: username,
    });
    /*fetch(`../../../../noroff-assignment-api/translations?username=${data.username}`)
      .then(response => response.json())
      .then(results => {
        console.log(results);
      })
      .catch(error => {
        console.log(error);
      })*/
  }
}