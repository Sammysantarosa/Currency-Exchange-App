import styles from './CurrencySelect.module.css';

export default function CurrencySelect({ label, currencies, value, onChange, disabled = false }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled}>
        {currencies.map((currency) => (
          <option key={currency.iso_code} value={currency.iso_code}>
            {currency.iso_code} · {currency.name}
          </option>
        ))}
      </select>
    </label>
  );
}
