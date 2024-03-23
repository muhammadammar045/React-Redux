import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItemsList/cartItems";

const initialState = {
    cartItems: cartItems,
    cartTotalQuantity: 4,
    cartTotalPrice: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
            cartItem.amount = cartItem.amount + 1

        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        removeOne: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
        },

        totalPrice: (state) => {
            let quantity = 0;
            let totalPrice = 0;

            state.cartItems.forEach((item) => {
                quantity += item.amount;
                totalPrice += item.amount * item.price;
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalPrice = totalPrice;
        }

    },

})

// console.log(cartSlice)

export const { clearCart, increase, decrease, removeOne, totalPrice } = cartSlice.actions
export const cartReducer = cartSlice.reducer;