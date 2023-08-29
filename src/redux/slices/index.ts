import { createSlice } from "@reduxjs/toolkit";
import { productInitialState } from "../../types";
import { fetchAllProducts } from "../actions";

const initialState: productInitialState = {
  products: [],
  isLoading: false,
  status: "idle",
  filters: {
    category: "",
    price: "",
    rate: null,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      console.log(action.payload);
      const { category, price, rate } = action.payload;
      state.filters.category = category;
      state.filters.price = price;
      state.filters.rate = rate;
    },
  },
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
export const { updateFilter } = productSlice.actions;
