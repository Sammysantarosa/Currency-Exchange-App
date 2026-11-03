import { useEffect, useState } from 'react';
import { getExchangeRate } from '../services/frankfurter.js';

export default function useExchangeRate(base, quote, refreshKey = 0) {
  const [rateData, setRateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!base || !quote) return undefined;
    const controller = new AbortController();
    setLoading(true);
    setError('');
    setRateData(null);
    getExchangeRate(base, quote, controller.signal)
      .then(setRateData)
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [base, quote, refreshKey]);

  return { rateData, loading, error };
}
