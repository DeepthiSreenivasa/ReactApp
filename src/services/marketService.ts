import type { Stock } from '../types/stock';

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

const getMarkets = async (): Promise<Stock[]> => {
  return stock;
};
export default getMarkets;
