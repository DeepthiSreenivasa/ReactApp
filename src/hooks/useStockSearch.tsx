import { useEffect, useState } from 'react';
import { searchStocks } from '../services/marketService';
import type { StockSearchResult } from '../types/stockSearchResults';

const useStockSearch = (query: string) => {
  const [searchResults, setSearchResults] = useState<StockSearchResult[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    setError(null);

    const controller = new AbortController();

    const timer = setInterval(() => {
      setIsLoading(true);
      searchStocks(query, controller.signal)
        .then((data) => {
          if (controller.signal.aborted) {
            return;
          }
          setSearchResults(data);
        })
        .catch((err) => {
          if (controller.signal.aborted) {
            return;
          }
          setError(err);
        })
        .finally(() => {
          if (controller.signal.aborted) {
            return;
          }
          setIsLoading(false);
        });
    }, 300);
    return () => {
      clearInterval(timer);
      controller.abort();
    };
  }, [query]);

  return { searchResults, isloading, error };
};

export default useStockSearch;
