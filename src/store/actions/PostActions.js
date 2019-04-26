import {
  POST_LOAD_START,
  POST_LOAD_SUCCESS,
  POST_LOAD_USER_DETAILS_START,
  POST_LOAD_USER_DETAILS_SUCCESS,
  POST_LOAD_FAIL
} from "../actionTypes/PostActionTypes";

export const loadAllPosts = () => dispatch => {
  dispatch({
    type: POST_LOAD_START
  });
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.body);
      }
      return response.json();
    })
    .then(json => {
      dispatch({
        type: POST_LOAD_SUCCESS,
        payload: json
      });
    })
    .catch(error => {
      dispatch({
        type: POST_LOAD_FAIL,
        payload: error
      });
    });
};

export const selectUser = userId => dispatch => {
  dispatch({
    type: POST_LOAD_USER_DETAILS_START
  });
  return fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(json =>
      dispatch({
        type: POST_LOAD_USER_DETAILS_SUCCESS,
        payload: json
      })
    )
    .catch(error => {
      dispatch({
        type: POST_LOAD_FAIL,
        payload: error
      });
    });
};
