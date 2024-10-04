import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        payment: {},
        address: {}
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setPayment: (state, action) => {
            state.payment = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        }
    }
})

export const { 
    setCart,
    setPayment,
    setAddress,
} = cartSlice.actions;

export default cartSlice.reducer;