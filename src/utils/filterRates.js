export function filterRates(rates, filters, sort) {
  const filtered = rates.filter((item) => {
    if (filters.dateFrom && item.date < filters.dateFrom) return false;
    if (filters.dateTo && item.date > filters.dateTo) return false;
    if (filters.minRate !== '' && item.rate < Number(filters.minRate)) return false;
    if (filters.maxRate !== '' && item.rate > Number(filters.maxRate)) return false;
    return true;
  });

  return [...filtered].sort((a, b) => {
    const comparison = sort.key === 'rate' ? a.rate - b.rate : a.date.localeCompare(b.date);
    return sort.direction === 'asc' ? comparison : -comparison;
  });
}
