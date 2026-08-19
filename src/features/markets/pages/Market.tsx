import useMarkets from '../../../hooks/useMarkets';
import useStockSearch from '../../../hooks/useStockSearch';

const Markets = () => {
  const {
    stock,
    isLoading: marketLoading,
    error: marketError,
  } = useMarkets('RELIANCE.BSE');

  const {
    searchResult,
    isloading: searchLoading,
    error: searchError,
  } = useStockSearch('RELIANCE.BSE');

  if (marketError) {
    return <span>Something went wrong</span>;
  }

  if (marketLoading) {
    return <span>Data still Loading...</span>;
  }

  const searchStocks = () => {
    console.log('searchResults::', searchResult);
    console.log('isLoading::', searchLoading);
    console.log('error::', searchError);
  };

  return (
    <>
      <button onClick={searchStocks}>Search Stocks</button>
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
