import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Stock } from '../types/stock';

interface MarketState {
  liveStock: Stock | null;
}

const initialState: MarketState = {
  liveStock: null,
};

const marketSlice = createSlice({
  name: 'market',
  initialState: initialState,
  reducers: {
    updateLiveStock: (state, action: PayloadAction<Stock>) => {
      state = { ...state, liveStock: action.payload };
      return state;
    },
  },
});

export const { updateLiveStock } = marketSlice.actions;
export default marketSlice.reducer;
