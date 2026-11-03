function escapeCSV(value) {
  const text = String(value ?? '');
  return `"${text.replaceAll('"', '""')}"`;
}

export function exportRatesCSV(rows, baseCurrency, quoteCurrency) {
  if (!Array.isArray(rows) || rows.length === 0) return false;

  const header = ['Data', 'Moeda de origem', 'Moeda de destino', 'Cotação'];
  const lines = rows.map((row) => [row.date, row.base, row.quote, row.rate]);
  const csv = [header, ...lines].map((line) => line.map(escapeCSV).join(';')).join('\r\n');
  const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  anchor.href = url;
  anchor.download = `historico-${baseCurrency}-${quoteCurrency}-${stamp}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  return true;
}
