// TODO: use this store variable to create a store.

import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";

// Note: you can delete the line below, but remember to create a new store variable
const reducers=combineReducers({
    isAuth:authReducer,
    cart:cartReducer,
    products:productReducer
})
export const store = legacy_createStore(reducers,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
