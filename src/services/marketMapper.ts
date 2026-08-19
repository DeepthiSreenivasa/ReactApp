import type { Stock } from '../types/stock';
import type { AlphaVantageDailyResponse } from '../types/alphaVantageDailyResponse';

const mapAlphaVantageStock = (data: AlphaVantageDailyResponse): Stock => {
  const timeSeries = data['Time Series (Daily)'];
  const dates = Object.keys(timeSeries);

  const sortedDates = dates.sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  const latestDate = sortedDates[0];
  const previousDate = sortedDates[1];

  const latestData = timeSeries[latestDate];
  const previousData = timeSeries[previousDate];

  const latestClose = Number(latestData['4. close']);
  const previousClose = Number(previousData['4. close']);

  const change = latestClose - previousClose;

  const changePercent = (change / previousClose) * 100;

  return {
    symbol: data['Meta Data']['2. Symbol'],
    name: 'Reliance Industries',
    price: latestClose,
    change: change,
    changePercent: changePercent,
  };
};

export default mapAlphaVantageStock;

//Basically you are creating a function which will
//derive you the required output by taking an input of
//type AlphaVantageDailyResponse and returning of type Stock
