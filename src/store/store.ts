import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

export default store;
