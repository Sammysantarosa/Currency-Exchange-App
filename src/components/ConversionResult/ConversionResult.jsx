import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { formatDate, formatMoney, formatRate } from '../../utils/formatCurrency.js';
import styles from './ConversionResult.module.css';

export default function ConversionResult({ result, rateData, baseCurrency, quoteCurrency, loading, error }) {
  return (
    <section className={styles.result} aria-live="polite">
      <div className={styles.resultTop}><span>VALOR CONVERTIDO</span><span className={styles.badge}><ArrowUpRight size={13}/> {rateData?.isIdentity ? 'Mesma moeda' : 'Cotação de referência'}</span></div>
      {loading ? <div className={styles.skeleton} /> : error ? <p className={styles.error}>{error}</p> : (
        <>
          <strong className={styles.value}>{result === null ? '—' : formatMoney(result, quoteCurrency)}</strong>
          <p className={styles.equivalent}>{baseCurrency} → {quoteCurrency}</p>
        </>
      )}
      <div className={styles.details}>
        <div><span>Taxa utilizada</span><strong>{rateData ? `1 ${baseCurrency} = ${formatRate(rateData.rate)} ${quoteCurrency}` : '—'}</strong></div>
        <div><span><CalendarDays size={13}/> Data da cotação</span><strong>{rateData ? formatDate(rateData.date) : '—'}</strong></div>
      </div>
    </section>
  );
}
