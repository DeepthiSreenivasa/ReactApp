import { useEffect, useState } from 'react';
import type { Stock } from '../types/stock';
import { getMarkets } from '../services/marketService';

const useMarkets = (symbol: string) => {
  const [stock, setStocks] = useState<Stock>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Into useEffetc');
    getMarkets(symbol)
      .then((data) => setStocks(data))
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [symbol]);

  return { stock, isLoading, error };
};

export default useMarkets;
