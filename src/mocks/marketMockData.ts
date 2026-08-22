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
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 1532.55,
    change: 12.45,
    changePercent: 0.87,
  },
  {
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    price: 1632.55,
    change: 12.45,
    changePercent: 0.87,
  },
  {
    name: 'NVIDIA Corporation',
    symbol: 'NVDA',
    price: 1732.55,
    change: 12.45,
    changePercent: 0.87,
  },
  {
    name: 'Reliance.BSE',
    symbol: 'Reliance.BSE',
    price: 1832.55,
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
