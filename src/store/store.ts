import { configureStore } from '@reduxjs/toolkit';
import marketReducer from '../slice/marketSlice';

const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
