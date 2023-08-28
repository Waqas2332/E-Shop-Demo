import { createSlice } from "@reduxjs/toolkit";
import { productInitialState } from "../../types";
import { fetchAllProducts } from "../actions";

const initialState: productInitialState = {
  products: [],
  isLoading: false,
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.status = "active";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.status = "finished";
      });
  },
});

export default productSlice.reducer;
