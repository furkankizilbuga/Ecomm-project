import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStates = {
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

export const fetchProductsByCategory = createAsyncThunk(
    "product/fetchProductsByCategory",
    async (categoryId) => {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products?category=" + categoryId);
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

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (productId) => {
        const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
        return response.data;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: [],
        products: [],
        total: 0,
        limit: 25,
        offset: 0,
        filter: "",
        selectedProduct: {},
        productsByCategory: [],
        productsBySearch: [],
        productsByCategoryFetchState: fetchStates.NOT_FETCHED,
        selectedFetchState: fetchStates.NOT_FETCHED,
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
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setProductsBySearch: (state, action) => {
            state.productsBySearch = action.payload;
        },
        setSelectedFetchState: (state, action) => {
            state.selectedFetchState = action.payload;
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
            });

        builder
            .addCase(fetchProduct.pending, state => {
                state.selectedFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.selectedFetchState = fetchStates.FETCHED;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProduct.rejected, state => {
                state.selectedFetchState = fetchStates.FAILED;
            });

        builder
            .addCase(fetchProductsByCategory.pending, state => {
                state.productsByCategoryFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.productsByCategoryFetchState = fetchStates.FETCHED;
                state.productsByCategory = action.payload.products;
            })
            .addCase(fetchProductsByCategory.rejected, state => {
                state.productsByCategoryFetchState = fetchStates.FAILED;
            });


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
    setProductsFetchState,
    setProductsBySearch
} = productSlice.actions;

export default productSlice.reducer;