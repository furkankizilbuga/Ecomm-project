import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        user: {},
        addressList: [],
        creditCards: [],
        roles: [],
        theme: "",
        language: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAddressList: (state, action) => {
            state.addressList = action.payload;
        },
        setCreditCards: (state, action) => {
            state.creditCards = action.payload;
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
    }
})

export const { 
    setUser,
    setRoles,
    setTheme,
    setLanguage
} = clientSlice.actions;

export default clientSlice.reducer;