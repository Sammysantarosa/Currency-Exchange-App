import { ArrowLeftRight, CircleHelp } from 'lucide-react';
import styles from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="Currency Exchange - início">
        <span className={styles.logo}><ArrowLeftRight size={19} strokeWidth={2.4} /></span>
        <span><strong>currency<span>exchange</span></strong><small>Conversão e análise de câmbio</small></span>
      </a>
      <div className={styles.headerMeta}>
        <span className={styles.source}><span /> Dados de referência · Frankfurter API</span>
        <a className={styles.help} href="https://frankfurter.dev/pt/" target="_blank" rel="noreferrer" aria-label="Documentação Frankfurter"><CircleHelp size={19} /></a>
      </div>
    </header>
  );
}
