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

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products");
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
        categoriesFetchState: fetchStates.NOT_FETCHED,
        productsFetchState: fetchStates.NOT_FETCHED
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
        setCategoriesFetchState: (state, action) => {
            state.categoriesFetchState = action.payload;
        },
        setProductsFetchState: (state, action) => {
            state.productsFetchState = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.categoriesFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categoriesFetchState = fetchStates.FETCHED;
            })
            .addCase(fetchCategories.rejected, state => {
                state.categoriesFetchState = fetchStates.FAILED;
            });
        
        builder
            .addCase(fetchProducts.pending, state => {
                state.productsFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsFetchState = fetchStates.FETCHED;
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsFetchState = fetchStates.FAILED;
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
    setCategoriesFetchState,
    setProductsFetchState
} = productSlice.actions;

export default productSlice.reducer;