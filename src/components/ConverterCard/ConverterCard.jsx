import { ArrowLeftRight, RefreshCw } from 'lucide-react';
import CurrencySelect from '../CurrencySelect/CurrencySelect.jsx';
import ConversionResult from '../ConversionResult/ConversionResult.jsx';
import styles from './ConverterCard.module.css';

export default function ConverterCard({ currencies, baseCurrency, quoteCurrency, onBaseChange, onQuoteChange, amount, onAmountChange, onSwap, onConvert, result, rateData, loading, error, currenciesLoading }) {
  return (
    <section className={styles.card} aria-labelledby="converter-title">
      <div className={styles.heading}><div><span className={styles.eyebrow}>CONVERSOR</span><h2 id="converter-title">Calcule sua conversão</h2><p>Consulte a taxa de câmbio e converta seu valor.</p></div><span className={styles.icon}><ArrowLeftRight size={20}/></span></div>
      <div className={styles.form}>
        <div className={styles.amountField}><label htmlFor="amount">Valor</label><div className={styles.amountWrap}><input id="amount" type="number" min="0" step="any" inputMode="decimal" value={amount} onChange={(event) => onAmountChange(event.target.value)} placeholder="1.000,00"/><span>Valor de origem</span></div></div>
        <CurrencySelect label="De" currencies={currencies} value={baseCurrency} onChange={onBaseChange} disabled={currenciesLoading}/>
        <button type="button" className={styles.swap} onClick={onSwap} aria-label="Inverter moedas" title="Inverter moedas"><ArrowLeftRight size={18}/></button>
        <CurrencySelect label="Para" currencies={currencies} value={quoteCurrency} onChange={onQuoteChange} disabled={currenciesLoading}/>
      </div>
      <div className={styles.bottom}><span className={styles.note}>A cotação pode ter uma data efetiva diferente de hoje.</span><button className={styles.convert} type="button" onClick={onConvert} disabled={loading || currenciesLoading}><RefreshCw size={15}/> Atualizar conversão</button></div>
      <ConversionResult result={result} rateData={rateData} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} loading={loading} error={error}/>
    </section>
  );
}
