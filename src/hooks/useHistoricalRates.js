import { useEffect, useState } from 'react';
import { getHistoricalRates } from '../services/frankfurter.js';
import { calculatePeriod } from '../utils/calculatePeriod.js';

export default function useHistoricalRates(base, quote, period) {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!base || !quote || !period) return undefined;
    if (base === quote) {
      setRates([]);
      setError('Escolha moedas diferentes para consultar o histórico.');
      setLoading(false);
      return undefined;
    }

    const controller = new AbortController();
    const { from, to } = calculatePeriod(period);
    setLoading(true);
    setError('');
    setRates([]);
    getHistoricalRates(base, quote, from, to, controller.signal)
      .then(setRates)
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [base, quote, period]);

  return { rates, loading, error };
}
