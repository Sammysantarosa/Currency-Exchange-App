import { AlertCircle, Inbox, LoaderCircle } from 'lucide-react';
import styles from './FeedbackState.module.css';

export default function FeedbackState({ type = 'empty', title, message, actionLabel, onAction }) {
  const Icon = type === 'loading' ? LoaderCircle : type === 'error' ? AlertCircle : Inbox;
  return (
    <div className={styles.state} role={type === 'error' ? 'alert' : 'status'}>
      <span className={`${styles.icon} ${type === 'error' ? styles.error : ''}`}><Icon size={20}/></span>
      <strong>{title || (type === 'loading' ? 'Consultando cotações...' : type === 'error' ? 'Não foi possível carregar os dados' : 'Nenhum dado encontrado')}</strong>
      {message && <p>{message}</p>}
      {actionLabel && onAction && <button type="button" onClick={onAction}>{actionLabel}</button>}
    </div>
  );
}
