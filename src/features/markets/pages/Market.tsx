import { useEffect, useState, type ChangeEvent } from 'react';
import useMarkets from '../../../hooks/useMarkets';
import useStockSearch from '../../../hooks/useStockSearch';
import { useDispatch } from 'react-redux';
import { mockMarketFeed } from '../../../services/mockMarketFeed';

const Markets = () => {
  const [searchString, setSearchString] = useState('');
  const [liveStock, setLiveStock] = useState(0);
  const dispatch = useDispatch();

  const {
    stock,
    isLoading: marketLoading,
    error: marketError,
  } = useMarkets('RELIANCE');

  const {
    searchResults,
    isloading: searchLoading,
    error: searchError,
  } = useStockSearch('RELIANCE.BSE');

  useEffect(() => {
    // mockMarketFeed((stock) => {
    //   console.log('Stock::', stock);
    // });
  }, []);

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
            {/* <td>{liveStock?.price}</td> */}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Markets;
