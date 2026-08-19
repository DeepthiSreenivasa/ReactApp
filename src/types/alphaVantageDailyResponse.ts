export type AlphaVantageDailyResponse = {
  'Meta Data': {
    '2. Symbol': string;
  };
  'Time Series (Daily)': Record<
    string,
    {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    }
  >;
};

//Record means it is a dictionary with dynamic keys, the
// key is quite dynamic with key as date
