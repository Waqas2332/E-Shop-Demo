import { createSlice } from "@reduxjs/toolkit";
import { cartInitialState } from "../../types";

const initialState: cartInitialState = {
  products: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, title } = action.payload;
      const existingProduct = state.products.find(
        (product) => product?.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          title,
          id,
          price,
          quantity: 1,
        });
      }

      state.totalAmount += price;
    },
    addItem: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload
      );
      existingProduct!.quantity += 1;
      state.totalAmount += existingProduct!.price;
    },
    removeItem: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (existingProduct!.quantity > 1) {
        existingProduct!.quantity -= 1;
      } else {
        console.log("hello");
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
      state.totalAmount -= existingProduct!.price;
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalAmount = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, addItem, removeItem, emptyCart } = cartSlice.actions;
