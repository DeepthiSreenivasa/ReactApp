import { env } from '../config/env';
import { mockStocks, mockStockSearchResults } from '../mocks/marketMockData';
import type { Stock } from '../types/stock';
import type { StockSearchResult } from '../types/stockSearchResults';
import mapAlphaVantageStock from './marketMapper';
import searchMapper from './searchMapper';

const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

console.log('APIKey::', apiKey);

export const getMarketFromMockData = async (symbol: string): Promise<Stock> => {
  console.log('mockStocks::', mockStocks);
  const stock = mockStocks.find((item) => item.symbol == symbol);

  if (!stock) {
    throw new Error(`Stock with symbol "${symbol}" not found.`);
  }

  return stock;
};

export const getMarkets = async (
  symbol: string,
  signal: AbortSignal
): Promise<Stock> => {
  if (env.USE_MOCK_DATA) {
    return getMarketFromMockData(symbol);
  }

  return getMarketsFromAPI(symbol, signal);
};

export const getMarketsFromAPI = async (
  symbol: string,
  signal: AbortSignal
): Promise<Stock> => {
  const api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`;
  const response = await fetch(api, { signal: signal });

  if (!response.ok) {
    throw new Error('Failed to fetch market data');
  }

  const data = await response.json();

  console.log('API Respone::', data);

  const stock = mapAlphaVantageStock(data);

  return stock;
};

export const searchStocksFromMock = async (
  query: string,
  controller: AbortSignal
): Promise<StockSearchResult[]> => {
  return [];
};

export const searchStocksFromApi = async (
  query: string,
  signal: AbortSignal
): Promise<StockSearchResult[]> => {
  const api = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(query)}&apikey=${apiKey}`;

  const response = await fetch(api, { signal: signal });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  const results = searchMapper(data);

  console.log('API Respone::', data);

  return results;
};

export const searchStocks = async (
  symbol: string,
  signal: AbortSignal
): Promise<StockSearchResult[]> => {
  if (env.USE_MOCK_DATA) {
    return searchStocksFromMock(symbol, signal);
  }

  return searchStocksFromApi(symbol, signal);
};
