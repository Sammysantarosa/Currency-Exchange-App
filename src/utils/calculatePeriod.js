import { PERIODS } from '../constants/periods.js';

function toLocalISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function calculatePeriod(periodId, now = new Date()) {
  const period = PERIODS.find((item) => item.id === periodId);
  if (!period) throw new Error(`Período inválido: ${periodId}`);

  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(end);
  if (period.unit === 'days') {
    start.setDate(start.getDate() - period.amount);
  } else {
    const originalDay = start.getDate();
    const targetMonthIndex = start.getMonth() - (period.unit === 'months' ? period.amount : period.amount * 12);
    const targetYear = start.getFullYear() + Math.floor(targetMonthIndex / 12);
    const normalizedMonth = ((targetMonthIndex % 12) + 12) % 12;
    const lastDayOfTargetMonth = new Date(targetYear, normalizedMonth + 1, 0).getDate();
    start.setFullYear(targetYear, normalizedMonth, Math.min(originalDay, lastDayOfTargetMonth));
  }

  return { from: toLocalISODate(start), to: toLocalISODate(end) };
}

export { toLocalISODate };
