import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import chatreducer from "./slices/chatslice";
import { chatApiSlice } from "../api/chatapi";
import categorySlice from "@/store/slices/categorySlice";

const store = configureStore({
  reducer: {
    chat: chatreducer,
    categories: categorySlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [chatApiSlice.reducerPath]: chatApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, chatApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => {
  return selector(store.getState());
};

export default store;
