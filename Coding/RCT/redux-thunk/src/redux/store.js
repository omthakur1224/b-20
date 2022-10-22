import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feeds/feeds.reducer";
import { postReducer } from "./posts/post.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    feeds:feedReducer,
    posts:postReducer
})
export const store=legacy_createStore(rootReducer);