import { ArrowDown, ArrowUp, ArrowUpDown, Download } from 'lucide-react';
import { formatDate, formatRate } from '../../utils/formatCurrency.js';
import FeedbackState from '../FeedbackState/FeedbackState.jsx';
import styles from './ExchangeTable.module.css';

function SortButton({ label, sortKey, sort, onSort }) {
  const active = sort.key === sortKey;
  const Icon = active ? (sort.direction === 'asc' ? ArrowUp : ArrowDown) : ArrowUpDown;
  return <button type="button" className={active ? styles.sorted : ''} onClick={() => onSort(sortKey)}>{label}<Icon size={12}/></button>;
}

function getAriaSort(sort, key) {
  if (sort.key !== key) return undefined;
  return sort.direction === 'asc' ? 'ascending' : 'descending';
}
export default function ExchangeTable({ rows, sort, onSort, count, loading, error, onExport, exportDisabled, baseCurrency, quoteCurrency }) {
  return (
    <section className={styles.section} aria-labelledby="table-title">
      <div className={styles.tableHeading}>
        <div><h3 id="table-title">Registros de cotação</h3><p>{count} {count === 1 ? 'registro encontrado' : 'registros encontrados'}</p></div>
        <button type="button" className={styles.export} onClick={onExport} disabled={exportDisabled}><Download size={14}/> Exportar CSV</button>
      </div>
      {loading ? <FeedbackState type="loading" title="Carregando registros..."/> : error ? <FeedbackState type="error" title="Erro ao carregar registros" message={error}/> : rows.length === 0 ? <FeedbackState type="empty" title="Nenhum registro corresponde aos filtros" message="Ajuste os filtros ou limpe a seleção atual."/> : (
        <div className={styles.scroll}>
          <table>
            <thead><tr><th aria-sort={getAriaSort(sort, 'date')}><SortButton label="Data" sortKey="date" sort={sort} onSort={onSort}/></th><th>Moeda de origem</th><th>Moeda de destino</th><th aria-sort={getAriaSort(sort, 'rate')}><SortButton label="Cotação" sortKey="rate" sort={sort} onSort={onSort}/></th></tr></thead>
            <tbody>{rows.map((row) => <tr key={`${row.date}-${row.base}-${row.quote}`}><td>{formatDate(row.date)}</td><td><span className={styles.currency}>{row.base}</span></td><td><span className={styles.currency}>{row.quote}</span></td><td className={styles.rate}>{formatRate(row.rate)}</td></tr>)}</tbody>
          </table>
        </div>
      )}
      <p className={styles.tableNote}>Exibindo {baseCurrency} → {quoteCurrency}. As datas refletem os dias com cotação publicada.</p>
    </section>
  );
}
