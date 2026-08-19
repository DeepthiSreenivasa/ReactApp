import { useEffect, useState } from 'react';
import { searchStocks } from '../services/marketService';
import type { StockSearchResult } from '../types/stockSearchResults';

const useStockSearch = (query: string) => {
  const [searchResult, setSearchResults] = useState<StockSearchResult[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    searchStocks(query)
      .then((data) => setSearchResults(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  return { searchResult, isloading, error };
};

export default useStockSearch;
