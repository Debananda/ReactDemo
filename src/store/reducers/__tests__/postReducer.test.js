import postReducer from "../postReducer";
import { POST_LOAD_START, POST_LOAD_SUCCESS, POST_LOAD_FAIL } from "../../actionTypes/PostActionTypes";
describe("Testing Post Reducers", () => {
  const initialState = {
    loading: false,
    posts: [],
    userDetails: null,
    selectedPostId: null,
    error: null
  };
  it("testing posts fetch ", () => {
    let state = postReducer(initialState, { type: POST_LOAD_START });
    expect(state).toEqual({ ...initialState, loading: true, error: null });
    state = postReducer(initialState, {
      type: POST_LOAD_SUCCESS,
      payload: [{ id: 1, userId: 1, title: "test title", body: "test body" }]
    });
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: null,
      posts: [{ id: 1, userId: 1, title: "test title", body: "test body" }]
    });
    state = postReducer(initialState, {
      type: POST_LOAD_FAIL,
      payload: new Error("Test Error")
    });
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: new Error("Test Error"),
      posts: []
    });
  });
});
