import useMarkets from '../../../hooks/useMarkets';

const Markets = () => {
  const { stocks, isLoading, error } = useMarkets();

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
          {stocks.map((item) => (
            <tr key={item.symbol}>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.change}</td>
              <td>{item.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Markets;
