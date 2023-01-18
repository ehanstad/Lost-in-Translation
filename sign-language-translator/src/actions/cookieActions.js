import { SET_COOKIE } from "./types";

export const setCookie = cookie => {
  return function (dispatch) {
    dispatch({
      type: SET_COOKIE,
      payload: cookie,
    });
  }
}