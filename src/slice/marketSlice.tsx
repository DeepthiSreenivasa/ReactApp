import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Stock } from '../types/stock';

interface MarketState {
  stocks: Record<string, Stock>;
}

const initialState: MarketState = {
  stocks: {},
};

const marketSlice = createSlice({
  name: 'market',
  initialState: initialState,
  reducers: {
    updateLiveStock: (state, action: PayloadAction<Stock>) => {
      state = {
        ...state,
        stocks: { ...state.stocks, [action.payload.symbol]: action.payload },
      };
      return state;
    },
  },
});

export const { updateLiveStock } = marketSlice.actions;
export default marketSlice.reducer;
