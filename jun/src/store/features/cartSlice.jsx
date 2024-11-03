import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";

export const postOrder = createAsyncThunk(
    'cart/postOrder',
    async ({ payload, token }, { dispatch }) => {
        try {
            const response = await axios.post(baseURL + "/order", payload, {
                headers: {
                    Authorization: token
                }
            });
            dispatch(setCart([]));
            dispatch(setAddress({}));
            dispatch(setPayment({}));
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        payment: {},
        address: {},
        orderCompleted: false
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
        },
        setOrderCompleted: (state, action) => {
            state.orderCompleted = action.payload;
        }
    }
})

export const { 
    setCart,
    setPayment,
    setAddress,
    setOrderCompleted
} = cartSlice.actions;

export default cartSlice.reducer;