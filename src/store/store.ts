import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

// Create and export the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// Type definitions for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;