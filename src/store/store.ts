import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import asteroidReducer from "../slices/AsteroidSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
