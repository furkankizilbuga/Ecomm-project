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


export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async ({ 
        category = '', 
        sort = '', 
        filter = '',              limit = 8,
    }, { rejectWithValue }) => {
        try {
            const baseURL = "https://workintech-fe-ecommerce.onrender.com";

            const searchParams = new URLSearchParams(location.search);
            const page = parseInt(searchParams.get('page')) || 1;

            const offset = (page - 1) * limit;
    
            let query = `/products?limit=${limit}&offset=${offset}`;
            if (category) query += `&category=${category}`;
            if (sort) query += `&sort=${sort}`;
            if (filter) query += `&filter=${filter}`;
    
            const response = await axios.get(baseURL + query);
            return {
                products: response.data.products,
                total: response.data.total,
                currentPage: page,
                productsPerPage: limit,
                offset
            };
        } catch (error) {
            console.error("Error fetching products:", error);
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

export const fetchProductsBySearch = createAsyncThunk(
    "product/fetchProductsBySearch",
    async ({ category, search }, { rejectWithValue }) => {
        try {
            let query = "?";
            if (category) query += `category=${category}&`;
            if (search) query += `filter=${search}`;

            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products" + query);
            return response.data.products || [];
        } catch (error) {
            console.error("Error fetching products:", error);
            return rejectWithValue("Error fetching products");
        }
    }
);

export const fetchProductsByInput = createAsyncThunk(
    "product/fetchProductsByInput",
    async ({ category, search }, { rejectWithValue }) => {
        try {
            let query = "?";
            if (category) query += `category=${category}&`;
            if (search) query += `filter=${search}`;

            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products" + query);
            return response.data.products || [];
        } catch (error) {
            console.error("Error fetching products:", error);
            return rejectWithValue("Error fetching products");
        }
    }
);


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
        currentPage: 1,
        productsPerPage: 8,
        offset: 0,
        filter: "",
        category: "",
        sort: "",
        selectedProduct: {},
        productsByInput: [],
        productsBySearch: [],
        productsBySearchFetchState: fetchStates.NOT_FETCHED,
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
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            state.offset = (action.payload - 1) * state.productsPerPage;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setProductsPerPage: (state, action) => {
            state.productsPerPage = action.payload;
            state.offset = (state.currentPage - 1) * action.payload;
        },

        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setProductsByInput: (state, action) => {
            state.productsBySearch = action.payload;
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
            .addCase(fetchProducts.pending, (state) => {
                state.productsFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsFetchState = fetchStates.FETCHED;
                state.products = action.payload.products;
                state.total = action.payload.total;
                state.currentPage = action.payload.currentPage;
                state.productsPerPage = action.payload.productsPerPage;
                state.offset = action.payload.offset;
            })
            .addCase(fetchProducts.rejected, (state) => {
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
            .addCase(fetchProductsBySearch.pending, state => {
                state.productsBySearchFetchState = fetchStates.FETCHING;
            })
            .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
                state.productsBySearchFetchState = fetchStates.FETCHED;
                state.productsBySearch = action.payload;
            })
            .addCase(fetchProductsBySearch.rejected, state => {
                state.productsBySearchFetchState = fetchStates.FAILED;
            });

        builder
            .addCase(fetchProductsByInput.fulfilled, (state, action) => {
                state.productsByInput = action.payload;
            });


    }
})

export const { 
    setCurrentPage,
    setCategories, 
    setProducts, 
    setTotal, 
    setCategory,
    setSort,
    setFilter,
    setProductsPerPage,
    setCategoriesFetchState,
    setProductsFetchState,
    setProductsBySearch,
    setProductsByInput
} = productSlice.actions;

export default productSlice.reducer;