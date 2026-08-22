import { useState, type ChangeEvent } from 'react';
import useMarkets from '../../../hooks/useMarkets';
import useStockSearch from '../../../hooks/useStockSearch';
import { useAppSelector } from '../../../store/hook';
import useMarketFeed from '../../../hooks/useMarketFeed';

const symbols = ['RELIANCE', 'AAPL', 'MSFT', 'NVDA'];
//Moved this out as it was getting created on every component render

const Markets = () => {
  const [searchString, setSearchString] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState('RELIANCE');

  const liveStock = useAppSelector(
    (state) => state.market.stocks[selectedSymbol]
  );

  const liveStocks = useAppSelector((state) => state.market.stocks);

  const { isLoading: marketLoading, error: marketError } =
    useMarkets(selectedSymbol);

  const {
    searchResults,
    isloading: searchLoading,
    error: searchError,
  } = useStockSearch('RELIANCE.BSE');

  useMarketFeed(symbols);

  if (marketError) {
    console.log(marketError);
    return <span>Something went wrong</span>;
  }

  if (marketLoading) {
    return <span>Data still Loading...</span>;
  }

  const searchStocks = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    console.log('searchResults::', searchResults);
  };

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={($event) => searchStocks($event)}
      />
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{liveStock?.symbol}</td>
            <td>{liveStock?.name}</td>
            <td>{liveStock?.price}</td>
            <td>{liveStock?.change}</td>
            <td>{liveStock?.changePercent}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(liveStocks).map((stock) => (
            <tr key={stock?.symbol}>
              <td>{stock?.symbol}</td>
              <td>{stock?.name}</td>
              <td>{stock?.price}</td>
              <td>{stock?.change}</td>
              <td>{stock?.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Markets;
