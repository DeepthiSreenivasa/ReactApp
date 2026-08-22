import { useEffect } from 'react';
import { mockMarketFeed } from '../services/mockMarketFeed';
import { useAppDispatch } from '../store/hook';
import type { Stock } from '../types/stock';
import { updateLiveStock } from '../slice/marketSlice';

const useMarketFeed = (symbol: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = mockMarketFeed(symbol, (stock: Stock) => {
      dispatch(updateLiveStock(stock));
    });
    return unsubscribe;
  }, [symbol, dispatch]);
};

export default useMarketFeed;
