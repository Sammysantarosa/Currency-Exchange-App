import styles from './PeriodSelector.module.css';
import { PERIODS } from '../../constants/periods.js';

export default function PeriodSelector({ value, onChange }) {
  return (
    <div className={styles.selector} role="group" aria-label="Período do histórico">
      {PERIODS.map((period) => (
        <button key={period.id} type="button" onClick={() => onChange(period.id)} className={value === period.id ? styles.active : ''} aria-pressed={value === period.id}>{period.label}</button>
      ))}
    </div>
  );
}
