import {AUTH_SIGNIN_FAIL, AUTH_SIGNIN_START, AUTH_SIGNIN_SUCCESS} from "../actionTypes/AuthActionTypes";

export const userSignIn = (userName, password) => dispatch => {
    dispatch({
        type: AUTH_SIGNIN_START
    });
    const signInPromise = new Promise((resolve, reject) => {
        if (userName === 'deba1988@gmail.com' && password === 'password') {
            setTimeout(() => resolve({
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo":
                        {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                }
                ,
                "phone": "1-770-736-8031 x56442"
            }), 1000);
        } else {
            setTimeout(() => reject(new Error('Failed')), 1000);
        }
    });
    return signInPromise.then(user => {
        dispatch({
            type: AUTH_SIGNIN_SUCCESS,
            payload: user
        });
    }, error => {
        dispatch({
            type: AUTH_SIGNIN_FAIL,
            payload: error
        })
    });
};