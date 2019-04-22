import {
    COMMENTS_LOAD_POST_COMMENTS_FAIL,
    COMMENTS_LOAD_POST_COMMENTS_START,
    COMMENTS_LOAD_POST_COMMENTS_SUCCESS,
    COMMENTS_SELECT_POST
} from "../actionTypes/CommentActionTypes";

export const loadPostComments = (postId) => dispatch => {
    dispatch({
        type: COMMENTS_SELECT_POST,
        payload: postId
    });
    dispatch({
        type: COMMENTS_LOAD_POST_COMMENTS_START
    });
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            if (!response.ok) {
                throw Error('Server Error')
            }
            return response.json()
        })
        .then(json => {
            const comments = json.filter(c => c.postId === postId);
            dispatch({
                type: COMMENTS_LOAD_POST_COMMENTS_SUCCESS,
                payload: comments
            })
        })
        .catch(error => dispatch({type: COMMENTS_LOAD_POST_COMMENTS_FAIL, payload: error}));
};