import { useState, type ChangeEvent } from 'react';
import useMarkets from '../../../hooks/useMarkets';
import useStockSearch from '../../../hooks/useStockSearch';

const Markets = () => {
  const [searchString, setSearchString] = useState('');

  const {
    stock,
    isLoading: marketLoading,
    error: marketError,
  } = useMarkets('RELIANCE.BSE');

  const {
    searchResults,
    isloading: searchLoading,
    error: searchError,
  } = useStockSearch('RELIANCE.BSE');

  if (marketError) {
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
            <td>{stock?.symbol}</td>
            <td>{stock?.name}</td>
            <td>{stock?.price}</td>
            <td>{stock?.change}</td>
            <td>{stock?.changePercent}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Markets;
