import { configureStore } from '@reduxjs/toolkit';
import marketReducer from '../src/slice/marketSlice';

const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
