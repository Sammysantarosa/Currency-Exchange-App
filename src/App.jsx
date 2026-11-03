import { useMemo, useState } from 'react';
import { Activity, TrendingUp } from 'lucide-react';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import ConverterCard from './components/ConverterCard/ConverterCard.jsx';
import PeriodSelector from './components/PeriodSelector/PeriodSelector.jsx';
import ExchangeChart from './components/ExchangeChart/ExchangeChart.jsx';
import HistoryFilters from './components/HistoryFilters/HistoryFilters.jsx';
import ExchangeTable from './components/ExchangeTable/ExchangeTable.jsx';
import FeedbackState from './components/FeedbackState/FeedbackState.jsx';
import useCurrencies from './hooks/useCurrencies.js';
import useExchangeRate from './hooks/useExchangeRate.js';
import useHistoricalRates from './hooks/useHistoricalRates.js';
import { filterRates } from './utils/filterRates.js';
import { calculateConversion, isValidAmount } from './utils/conversion.js';
import { exportRatesCSV } from './utils/exportCSV.js';
import styles from './App.module.css';

const EMPTY_FILTERS = { dateFrom: '', dateTo: '', minRate: '', maxRate: '' };

export default function App() {
  const { currencies, loading: currenciesLoading, error: currenciesError } = useCurrencies();
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [quoteCurrency, setQuoteCurrency] = useState('USD');
  const [amount, setAmount] = useState('100');
  const [period, setPeriod] = useState('30d');
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [sort, setSort] = useState({ key: 'date', direction: 'desc' });
  const [conversionNonce, setConversionNonce] = useState(0);

  const { rateData, loading: rateLoading, error: rateError } = useExchangeRate(baseCurrency, quoteCurrency, conversionNonce);
  const { rates, loading: historyLoading, error: historyError } = useHistoricalRates(baseCurrency, quoteCurrency, period);
  const amountInvalid = !isValidAmount(amount);
  const convertedValue = !amountInvalid && rateData ? calculateConversion(amount, rateData.rate) : null;

  const filteredRates = useMemo(() => filterRates(rates, filters, sort), [rates, filters, sort]);

  function handleSwap() {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  }

  function handleSort(key) {
    setSort((current) => ({ key, direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc' }));
  }

  function handleConvert() {
    if (!amountInvalid) setConversionNonce((current) => current + 1);
  }

  function clearFilters() {
    setFilters(EMPTY_FILTERS);
  }

  const hasCurrencyOptions = currencies.length > 0;
  const dateRangeLabel = useMemo(() => {
    const today = new Date();
    return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(today);
  }, []);

  return (
    <div className={styles.page} id="inicio">
      <div className={styles.container}>
        <AppHeader />
        <main>
          <section className={styles.intro}>
            <div><span className={styles.kicker}>MERCADO DE CÂMBIO</span><h1>Entenda o valor do seu dinheiro.</h1><p>Converta moedas e acompanhe o comportamento das cotações em um só lugar.</p></div>
            <div className={styles.periodLabel}><Activity size={15}/><span>Dados históricos · {dateRangeLabel}</span></div>
          </section>

          {currenciesError ? <div className={styles.globalError}><FeedbackState type="error" title="Não foi possível carregar a lista de moedas" message={currenciesError} actionLabel="Recarregar página" onAction={() => window.location.reload()}/></div> : null}

          <ConverterCard
            currencies={currencies}
            currenciesLoading={!hasCurrencyOptions || currenciesLoading}
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
            onBaseChange={setBaseCurrency}
            onQuoteChange={setQuoteCurrency}
            amount={amount}
            onAmountChange={setAmount}
            onSwap={handleSwap}
            onConvert={handleConvert}
            result={convertedValue}
            rateData={rateData}
            loading={rateLoading}
            error={amountInvalid ? 'Informe um valor numérico igual ou maior que zero.' : rateError}
          />

          <section className={styles.history} aria-labelledby="history-title">
            <div className={styles.sectionTop}>
              <div><span className={styles.kicker}>ANÁLISE DE MERCADO</span><h2 id="history-title">Histórico de cotação</h2><p>Acompanhe a variação de {baseCurrency} em relação a {quoteCurrency}.</p></div>
              <div className={styles.trendIcon}><TrendingUp size={19}/></div>
            </div>
            <div className={styles.periodRow}><span>Período de análise</span><PeriodSelector value={period} onChange={setPeriod}/></div>
            <ExchangeChart data={rates} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} loading={historyLoading} error={historyError}/>
            <div className={styles.historyTable}>
              <div className={styles.tableIntro}><div><h3>Histórico detalhado</h3><p>Use os filtros para refinar os registros exibidos.</p></div></div>
              <HistoryFilters filters={filters} onChange={setFilters} onClear={clearFilters}/>
              <ExchangeTable rows={filteredRates} sort={sort} onSort={handleSort} count={filteredRates.length} loading={historyLoading} error={historyError} onExport={() => exportRatesCSV(filteredRates, baseCurrency, quoteCurrency)} exportDisabled={filteredRates.length === 0 || historyLoading || Boolean(historyError)} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency}/>
            </div>
          </section>
        </main>
        <footer className={styles.footer}><span>Currency Exchange</span><span>Dados de referência: Frankfurter API · Não representa oferta de compra ou venda de moeda.</span></footer>
      </div>
    </div>
  );
}
