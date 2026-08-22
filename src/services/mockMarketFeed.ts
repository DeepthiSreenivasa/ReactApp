import { mockStocks } from '../mocks/marketMockData';
import type { Stock } from '../types/stock';

export const mockMarketFeed = (
  symbol: string,
  onUpdate: (stock: Stock) => void
) => {
  const initialStock = mockStocks.find((item) => item.symbol === symbol);

  if (!initialStock) {
    throw new Error(`Stock not found: ${symbol}`);
  }

  let currentStock = initialStock;
  onUpdate(currentStock);
  const interval = setInterval(() => {
    const updatedStock = generatePrice(currentStock);
    currentStock = updatedStock;
    onUpdate(currentStock);
  }, 5000);
  return () => clearInterval(interval);
};

const generatePrice = (stock: Stock): Stock => {
  const prevPrice = stock.price;

  const newPrice = prevPrice + (Math.random() - 0.5) * 10;

  const change = newPrice - prevPrice;

  const changePercent = (change / prevPrice) * 100;

  return {
    symbol: stock.symbol,
    name: stock.name,
    price: newPrice,
    change: change,
    changePercent: changePercent,
    timeStamp: Date.now(),
  };
};
