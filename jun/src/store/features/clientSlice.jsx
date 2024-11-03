import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStates = {
    NOT_FETCHED: "NOT_FETCHED",
    FETCHING: "FETCHING",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
};

export const fetchAddressList = createAsyncThunk(
    "client/fetchAddressList",
    async (token) => {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/user/address", {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    }
)

export const fetchCreditCards = createAsyncThunk(
    "client/fetchCreditCards",
    async (token) => {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/user/card", {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    }
)

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        user: {},
        addressList: [],
        creditCards: [],
        roles: [],
        theme: "",
        language: "",
        addressListFetchState: fetchStates.NOT_FETCHED,
        creditCardsFetchState: fetchStates.NOT_FETCHED
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddressList.pending, state => {
                state.addressListFetchState = fetchStates.FETCHING
            })
            .addCase(fetchAddressList.fulfilled, (state, action) => {
                state.addressList = action.payload
                state.addressListFetchState = fetchStates.FETCHED
            })
            .addCase(fetchAddressList.rejected, state => {
                state.addressListFetchState = fetchStates.FAILED;
            });

        builder
            .addCase(fetchCreditCards.pending, state => {
                state.creditCardsFetchState = fetchStates.FETCHING
            })
            .addCase(fetchCreditCards.fulfilled, (state, action) => {
                console.log(action.payload)
                state.creditCards = action.payload
                state.creditCardsFetchState = fetchStates.FETCHED
            })
            .addCase(fetchCreditCards.rejected, state => {
                state.creditCardsFetchState = fetchStates.FAILED;
            })
    }
})

export const { 
    setUser,
    setRoles,
    setTheme,
    setLanguage
} = clientSlice.actions;

export default clientSlice.reducer;