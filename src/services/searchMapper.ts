import type { AlphaVantageSearchResponse } from '../types/alphaVantageSearchResponse';
import type { StockSearchResult } from '../types/stockSearchResults';

const searchMapper = (
  data: AlphaVantageSearchResponse
): StockSearchResult[] => {
  return data.bestMatches.map((item) => ({
    symbol: item['1. symbol'],
    name: item['2. name'],
  }));
};

export default searchMapper;
