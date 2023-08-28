import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../apis/index.ts";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const response = await api.fetchAllProducts();
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
