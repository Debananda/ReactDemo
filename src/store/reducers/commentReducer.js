import {
    COMMENTS_LOAD_POST_COMMENTS_FAIL,
    COMMENTS_LOAD_POST_COMMENTS_START,
    COMMENTS_LOAD_POST_COMMENTS_SUCCESS,
    COMMENTS_SELECT_POST
} from "../actionTypes/CommentActionTypes";

const initialState = {
    postId: null,
    comments: [],
    loading: false,
    error: null
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS_SELECT_POST:
            return {...state, postId: action.payload};
        case COMMENTS_LOAD_POST_COMMENTS_START:
            return {...state, loading: true, error: null};
        case COMMENTS_LOAD_POST_COMMENTS_SUCCESS:
            return {...state, loading: false, comments: action.payload};
        case COMMENTS_LOAD_POST_COMMENTS_FAIL:
            return {...state, loading: false, error: action.payload};
        default:
            return {...state}
    }
};

export default commentReducer;