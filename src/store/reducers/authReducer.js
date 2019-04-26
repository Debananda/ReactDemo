import { AUTH_SIGNIN_FAIL, AUTH_SIGNIN_START, AUTH_SIGNIN_SUCCESS } from "../actionTypes/AuthActionTypes";

const initialState = {
  user: {},
  isUserAuthenticated: false,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_SIGNIN_START:
      return {
        ...state,
        loading: true,
        isUserAuthenticated: false,
        error: null
      };
    case AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isUserAuthenticated: true,
        loading: false
      };
    case AUTH_SIGNIN_FAIL:
      return {
        ...state,
        user: {},
        isUserAuthenticated: false,
        loading: false,
        error: action.payload
      };
    default:
      return { ...state };
  }
};

export default authReducer;
