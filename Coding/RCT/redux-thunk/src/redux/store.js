import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feeds/feeds.reducer";
import { postReducer } from "./posts/post.reducer";

const rootReducer=combineReducers({
    feeds:feedReducer,
    posts:postReducer,
    auth:authReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));