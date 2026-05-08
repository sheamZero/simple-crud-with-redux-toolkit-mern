
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axios.get("http://localhost:5000/api/products");
        return res.data;
    }
)

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id) => {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        return res.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: null,

        isLoading: false,
        isError: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // console.log("from extra reducer ", action.payload);
                state.products = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error
            })

            // for single product
            .addCase(fetchProductById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.product = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = null
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.product = null,
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error
            })



    }
})

export default productsSlice.reducer;