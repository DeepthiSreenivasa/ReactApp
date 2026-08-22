import { useEffect, useState } from 'react';
import { getMarkets } from '../services/marketService';
import { updateLiveStock } from '../slice/marketSlice';
import { useAppDispatch } from '../store/hook';

const useMarkets = (symbol: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Into useEffect');
    setIsLoading(true);
    setError(null);
    const controller = new AbortController();
    getMarkets(symbol, controller.signal)
      .then((data) => {
        dispatch(updateLiveStock(data));
      })
      .catch((err) => {
        if (controller.signal.aborted) return; //ignore the error which comes from abort signal

        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Something went wrong'));
        }
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [symbol, dispatch]); //Since the effect uses dispatch, that's the correct dependency declaration.

  return { isLoading, error };
};

export default useMarkets;
