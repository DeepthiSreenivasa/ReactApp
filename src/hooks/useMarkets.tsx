import { useEffect, useState } from 'react';
import type { Stock } from '../types/stock';
import { getMarkets } from '../services/marketService';

const useMarkets = (symbol: string) => {
  const [stock, setStocks] = useState<Stock>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('Into useEffect');
    setIsLoading(true);
    setError(null);
    const controller = new AbortController();
    getMarkets(symbol, controller.signal)
      .then((data) => setStocks(data))
      .catch((err) => {
        if (controller.signal.aborted) return; //ignore the error which comes from abort signal

        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Something went wrong'));
        }
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [symbol]);

  return { stock, isLoading, error };
};

export default useMarkets;
