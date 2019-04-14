import {AUTH_SIGNIN_FAIL, AUTH_SIGNIN_START, AUTH_SIGNIN_SUCCESS} from "../../actionTypes/AuthActionTypes";
import authReducer from "../authReducer";

describe('Testing Auth Reducer', () => {
    const initialState = {
        user: {},
        isUserAuthenticated: false,
        loading: false,
        error: null
    };

    it('Auth Reducer Testing', () => {
        let state = authReducer(initialState, {type: AUTH_SIGNIN_START});
        expect(state).toEqual({...initialState, loading: true});
        state = authReducer(initialState, {
            type: AUTH_SIGNIN_SUCCESS, payload: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            }
        });
        expect(state).toEqual({
            ...initialState, loading: false, user: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            }, isUserAuthenticated: true
        });
        state = authReducer(initialState, {
            type: AUTH_SIGNIN_FAIL,
            payload: new Error('Testing Error')
        });
        expect(state).toEqual({...initialState, loading: false, error: new Error('Testing Error')});
    })
});
