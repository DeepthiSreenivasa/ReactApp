import type { Stock } from '../types/stock';
import type { StockSearchResult } from '../types/stockSearchResults';

export const mockStocks: Stock[] = [
  {
    name: 'Reliance Industries',
    symbol: 'RELIANCE',
    price: 1432.55,
    change: 12.45,
    changePercent: 0.87,
  },
];

export const mockStockSearchResults: StockSearchResult[] = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
  },
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
  },
];
