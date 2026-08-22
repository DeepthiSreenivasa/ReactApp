import type { Stock } from '../types/stock';
import type { AlphaVantageDailyResponse } from '../types/alphaVantageDailyResponse';
import { instruments } from '../mocks/instrumentData';

const mapAlphaVantageStock = (data: AlphaVantageDailyResponse): Stock => {
  console.log('Data::', data);
  const timeSeries = data['Time Series (Daily)'];
  if (!timeSeries) {
    throw new Error('Market data is unavailable');
  }
  const dates = Object.keys(timeSeries);

  const sortedDates = dates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  if (sortedDates.length < 2) {
    throw new Error('Insufficient market data');
  }

  const latestDate = sortedDates[0];
  const previousDate = sortedDates[1];

  const latestData = timeSeries[latestDate];
  const previousData = timeSeries[previousDate];

  const latestClose = Number(latestData['4. close']);
  const previousClose = Number(previousData['4. close']);

  const change = latestClose - previousClose;

  const changePercent = (change / previousClose) * 100;

  const symbol = data['Meta Data']['2. Symbol'];

  const instrument = instruments.find((item) => item.symbol === symbol);

  if (!instrument) {
    throw new Error(`Instrument not found for ${symbol}`);
  }

  return {
    symbol: symbol,
    name: instrument.name,
    price: latestClose,
    change: change,
    changePercent: changePercent,
    timestamp: new Date(latestDate).getTime(),
  };
};

export default mapAlphaVantageStock;

//Basically you are creating a function which will
//derive you the required output by taking an input of
//type AlphaVantageDailyResponse and returning of type Stock
