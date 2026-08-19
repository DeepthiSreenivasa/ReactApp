import { useEffect, useState } from 'react';
import type { Stock } from '../types/stock';
import getMarkets from '../services/marketService';

const useMarkets = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Into useEffetc');
    getMarkets()
      .then((data) => setStocks(data))
      .catch((err) => setError('Err'))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { stocks, isLoading, error };
};

export default useMarkets;
