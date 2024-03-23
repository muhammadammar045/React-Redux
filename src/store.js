import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cartSlice.js";
import { userReducer } from "./features/thunk/userThunk.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
})

