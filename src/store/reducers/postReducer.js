import {
  POST_LOAD_START,
  POST_LOAD_SUCCESS,
  POST_LOAD_FAIL,
  POST_LOAD_USER_DETAILS_START,
  POST_LOAD_USER_DETAILS_SUCCESS,
  POST_LOAD_USER_DETAILS_FAILED
} from "../actionTypes/PostActionTypes";

const initialState = {
  loading: false,
  posts: [],
  userDetails: null,
  selectedPostId: null,
  error: null
};

const postReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POST_LOAD_START:
    case POST_LOAD_USER_DETAILS_START:
      return { ...state, loading: true, error: null };
    case POST_LOAD_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case POST_LOAD_FAIL:
      return { ...state, loading: false, posts: [], error: action.payload };
    case POST_LOAD_USER_DETAILS_SUCCESS:
      return { ...state, loading: false, userDetails: action.payload };
    case POST_LOAD_USER_DETAILS_FAILED:
      return { ...state, loading: false, userDetails: null, error: action.payload };
    default:
      return { ...state };
  }
};

export default postReducer;
