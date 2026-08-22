import { useEffect, useState, type ChangeEvent } from 'react';
import useMarkets from '../../../hooks/useMarkets';
import useStockSearch from '../../../hooks/useStockSearch';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import useMarketFeed from '../../../hooks/useMarketFeed';

const Markets = () => {
  const [searchString, setSearchString] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState('RELIANCE');

  const liveStock = useAppSelector((state) => state.market.liveStock?.price);

  const {
    stock,
    isLoading: marketLoading,
    error: marketError,
  } = useMarkets(selectedSymbol);

  const {
    searchResults,
    isloading: searchLoading,
    error: searchError,
  } = useStockSearch('RELIANCE.BSE');

  useMarketFeed(selectedSymbol);

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
            <th>Live Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stock?.symbol}</td>
            <td>{stock?.name}</td>
            <td>{stock?.price}</td>
            <td>{stock?.change}</td>
            <td>{stock?.changePercent}</td>
            <td>{liveStock}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Markets;
