import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addCartItemInDB = createAsyncThunk("carts/addCartItemInDB",
    async (cartItem) => {
        console.log("cart to added ", cartItem);
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/carts`, cartItem);
        return res.data;
    }
)

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        cartItems: [],
        isLoading: false,
        isError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCartItemInDB.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addCartItemInDB.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(addCartItemInDB.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error;
            })
    }
})

export default cartsSlice.reducer;