import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatDate, formatRate } from '../../utils/formatCurrency.js';
import FeedbackState from '../FeedbackState/FeedbackState.jsx';
import styles from './ExchangeChart.module.css';

function RateTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return <div className={styles.tooltip}><strong>{formatDate(point.date)}</strong><span>{formatRate(point.rate)}</span></div>;
}

export default function ExchangeChart({ data, baseCurrency, quoteCurrency, loading, error }) {
  if (loading) return <FeedbackState type="loading" title="Consultando histórico..." />;
  if (error) return <FeedbackState type="error" title="Falha ao consultar o histórico" message={error} />;
  if (!data.length) return <FeedbackState type="empty" title="Nenhuma cotação encontrada" message="Não há observações para o par e o período selecionados." />;

  const chartData = data.map((item) => ({ ...item, shortDate: item.date.slice(5).split('-').reverse().join('/') }));
  return (
    <div className={styles.chartWrap} aria-label={`Gráfico histórico ${baseCurrency} para ${quoteCurrency}`}>
      <div className={styles.legend}><span /> 1 {baseCurrency} em {quoteCurrency}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 12, left: 3, bottom: 2 }}>
          <CartesianGrid stroke="#e9eef1" strokeDasharray="3 4" vertical={false}/>
          <XAxis dataKey="shortDate" tick={{ fill: '#84919b', fontSize: 10 }} axisLine={false} tickLine={false} minTickGap={28}/>
          <YAxis domain={['auto', 'auto']} tick={{ fill: '#84919b', fontSize: 10 }} axisLine={false} tickLine={false} width={66} tickFormatter={formatRate}/>
          <Tooltip content={<RateTooltip/>}/>
          <Line type="monotone" dataKey="rate" stroke="#216b88" strokeWidth={2.4} dot={false} activeDot={{ r: 4, fill: '#216b88', stroke: '#fff', strokeWidth: 2 }} isAnimationActive={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
