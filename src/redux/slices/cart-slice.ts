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
        existingProduct.price += price;
      } else {
        state.products.push({
          title,
          id,
          price,
          quantity: 1,
        });
      }

      state.totalAmount += price;
      console.log(state.totalAmount);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
