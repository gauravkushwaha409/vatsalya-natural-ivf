import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import chatreducer from "./slices/chatslice";

const store = configureStore({
  reducer: {
    chat: chatreducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => {
  return selector(store.getState());
};

export default store;
