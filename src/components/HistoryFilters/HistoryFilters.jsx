import { FilterX } from 'lucide-react';
import styles from './HistoryFilters.module.css';

export default function HistoryFilters({ filters, onChange, onClear }) {
  return (
    <div className={styles.filters}>
      <label>De <input type="date" value={filters.dateFrom} onChange={(event) => onChange({ ...filters, dateFrom: event.target.value })}/></label>
      <label>Até <input type="date" value={filters.dateTo} onChange={(event) => onChange({ ...filters, dateTo: event.target.value })}/></label>
      <label>Cotação mín. <input type="number" min="0" step="any" placeholder="Mínima" value={filters.minRate} onChange={(event) => onChange({ ...filters, minRate: event.target.value })}/></label>
      <label>Cotação máx. <input type="number" min="0" step="any" placeholder="Máxima" value={filters.maxRate} onChange={(event) => onChange({ ...filters, maxRate: event.target.value })}/></label>
      <button type="button" onClick={onClear}><FilterX size={14}/> Limpar</button>
    </div>
  );
}
