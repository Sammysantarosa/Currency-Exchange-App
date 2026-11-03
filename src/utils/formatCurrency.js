export function formatMoney(value, currency, locale = 'pt-BR') {
  if (!Number.isFinite(Number(value)) || !currency) return '—';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(Number(value));
  } catch {
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(Number(value))} ${currency}`;
  }
}

export function formatRate(value) {
  if (!Number.isFinite(Number(value))) return '—';
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 6 }).format(Number(value));
}

export function formatDate(value) {
  if (!value) return '—';
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return value;
  return new Intl.DateTimeFormat('pt-BR').format(new Date(year, month - 1, day));
}
