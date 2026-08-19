import useMarkets from '../../../hooks/useMarkets';

const Markets = () => {
  const { stock, isLoading, error } = useMarkets('RELIANCE.BSE');

  if (error) {
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Data still Loading...</span>;
  }

  return (
    <>
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
