import { useEffect } from 'react';
import { mockMarketFeed } from '../services/mockMarketFeed';
import { useAppDispatch } from '../store/hook';
import type { Stock } from '../types/stock';
import { updateLiveStock } from '../slice/marketSlice';

const useMarketFeed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = mockMarketFeed((stock: Stock) => {
      dispatch(updateLiveStock(stock));
    });
    return unsubscribe;
  }, [dispatch]);
};

export default useMarketFeed;
