import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchStates = {
    NOT_FETCHED: "NOT_FETCHED",
    FETCHING: "FETCHING",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
};

export const fetchCategories = createAsyncThunk(
    "product/fetchCategories",
    async () => {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
        return response.data;
    }
)

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.fetchState = fetchStates.FETCHING;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.fetchState = fetchStates.FETCHED;
                //console.log(action.payload);
            })
            .addCase(fetchCategories.rejected, state => {
                state.fetchState = fetchStates.FAILED;
            })
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