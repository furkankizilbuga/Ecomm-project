import { createSlice } from '@reduxjs/toolkit';

const fetchStates = {
    NOT_FETCHED: "NOT_FETCHED",
    FETCHING: "FETCHING",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
};

export const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: [],
        products: [],
        total: 0,
        limit: 25,
        offset: 0,
        filter: "",
        fetchState: fetchStates.NOT_FETCHED
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setFetchState: (state, action) => {
            state.fetchState = action.payload;
        }
    }
})

export const { 
    setCategories, 
    setProducts, 
    setTotal, 
    setLimit, 
    setOffset, 
    setFilter, 
    setFetchState 
} = productSlice.actions;

export default productSlice.reducer;