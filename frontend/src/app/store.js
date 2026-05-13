import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartsReducer from '../features/carts/cartsSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        cartsR: cartsReducer
    }
})

export default store;