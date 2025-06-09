import { configureStore } from '@reduxjs/toolkit';
import { skipsApi } from './api/skipsApi';

export const store = configureStore({
  reducer: {
    [skipsApi.reducerPath]: skipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skipsApi.middleware),
});