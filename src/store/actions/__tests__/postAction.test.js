import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loadAllPosts } from "../PostActions";
import { POST_LOAD_START, POST_LOAD_SUCCESS, POST_LOAD_FAIL } from "../../actionTypes/PostActionTypes";
import fetchMock from "fetch-mock";
describe("Testing post actions", () => {
  let store = null;
  beforeEach(() => {
    store = configureMockStore([thunk])({});
  });
  it("expected actions should be dispatched on successful request", () => {
    fetchMock.get("*", { response: 200 });
    const expectedActions = [POST_LOAD_START, POST_LOAD_SUCCESS];
    return store.dispatch(loadAllPosts()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
  it("expected actions should be dispatched on failed request", () => {
    fetchMock.get("*", 500);
    const expectedActions = [POST_LOAD_START, POST_LOAD_FAIL];
    return store.dispatch(loadAllPosts()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
});
