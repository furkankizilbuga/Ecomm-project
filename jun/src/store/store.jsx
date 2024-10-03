import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/productSlice";
import clientReducer from "./features/clientSlice";
import cartReducer from "./features/cartSlice";


const store = configureStore({
    reducer: {
        product: productReducer,
        client: clientReducer,
        cart: cartReducer
    }
})

export default store;