import { useEffect, useState } from 'react';
import { getCurrencies } from '../services/frankfurter.js';

export default function useCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    getCurrencies(controller.signal)
      .then(setCurrencies)
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  return { currencies, loading, error };
}
