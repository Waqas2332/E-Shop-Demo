import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/index.ts";
import cartReducer from "../slices/cart-slice.ts";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
