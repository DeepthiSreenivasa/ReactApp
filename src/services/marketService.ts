import type { Stock } from '../types/stock';
import mapAlphaVantageStock from './marketMapper';

const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

console.log('APIKey::', apiKey);

const stock: Stock[] = [
  {
    name: 'Reliance Industries',
    symbol: 'RELIANCE',
    price: 1432.55,
    change: 12.45,
    changePercent: 0.87,
  },
];

const getMarkets = async (symbol: string): Promise<Stock> => {
  const api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`;
  //const api = '';
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error('Failed to fetch market data');
  }

  const data = await response.json();

  console.log('API Respone::', data);

  const stock = mapAlphaVantageStock(data);

  return stock;
};
export default getMarkets;
