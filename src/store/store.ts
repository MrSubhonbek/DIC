import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { converterCoreAPI } from "./services/ConverterService";

export const store = configureStore({
  reducer: {
    [converterCoreAPI.reducerPath]: converterCoreAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(converterCoreAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
