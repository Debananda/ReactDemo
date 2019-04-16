import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { userSignIn } from "../AuthActions";
import { AUTH_SIGNIN_START, AUTH_SIGNIN_SUCCESS } from "../../actionTypes/AuthActionTypes";

describe("Testing Auth Action", () => {
  let store;
  beforeEach(() => {
    store = configureMockStore([thunk])();
  });
  it("Auth Action Testing", async () => {
    await store.dispatch(userSignIn("deba1988@gmail.com", "password"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: AUTH_SIGNIN_START });
    expect(actions[1]).toEqual({
      type: AUTH_SIGNIN_SUCCESS,
      payload: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442"
      }
    });
  });
});
