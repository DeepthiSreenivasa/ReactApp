import type { Stock } from '../types/stock';

export const mockMarketFeed = (onUpdate: (stock: Stock) => void) => {
  const interval = setInterval(() => {
    const stock = generatePrice();
    onUpdate(stock);
  }, 5000);
  return () => clearInterval(interval);
};

const generatePrice = (): Stock => {
  const price = 1232.55 + (Math.random() - 0.5) * 10;
  return {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: price,
    change: 12.45,
    changePercent: 0.87,
  };
};
