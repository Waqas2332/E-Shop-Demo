import { createSlice } from "@reduxjs/toolkit";
import { orderInitialState } from "../../types";

const initialState: orderInitialState = {
  order: {
    cartProducts: [],
    totalAmount: 0,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    dispatchOrder: (state, action) => {
      state.order.cartProducts = action.payload.cartProducts;
      state.order.totalAmount = action.payload.totalAmount;
    },
  },
});

export default orderSlice.reducer;
export const { dispatchOrder } = orderSlice.actions;
