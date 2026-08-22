import { useEffect } from 'react';
import { mockMarketFeed } from '../services/mockMarketFeed';
import { useAppDispatch } from '../store/hook';
import type { Stock } from '../types/stock';
import { updateLiveStock } from '../slice/marketSlice';

const useMarketFeed = (symbols: string[]) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribers = symbols.map((symbol) =>
      mockMarketFeed(symbol, (stock: Stock) => {
        dispatch(updateLiveStock(stock));
      })
    );

    return () => {
      unsubscribers.forEach((unsubscribe) => {
        unsubscribe();
      });
    };
  }, [symbols, dispatch]);
};

export default useMarketFeed;
