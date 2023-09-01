import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/index.ts";
import cartReducer from "../slices/cart-slice.ts";
import orderReducer from "../slices/order-slice.ts";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
