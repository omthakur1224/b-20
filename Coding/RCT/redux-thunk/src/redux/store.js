import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feeds/feeds.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    feeds:feedReducer
})
export const store=legacy_createStore(rootReducer);