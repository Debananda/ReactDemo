import {combineReducers} from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({auth: authReducer, post: postReducer, comment: commentReducer});

export default rootReducer;
