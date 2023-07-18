import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/app/slices/counter-slice';

export const store = configureStore({
  reducer: {
    counterReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;