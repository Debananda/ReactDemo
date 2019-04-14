const initialState = {
    loading: false,
    posts: [],
    userId: null,
    selectedPostId: null
};

const postReducer = (state = initialState, action = {}) => {
    return {...state}
};

export default postReducer;