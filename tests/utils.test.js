import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateConversion, isValidAmount } from '../src/utils/conversion.js';
import { calculatePeriod } from '../src/utils/calculatePeriod.js';
import { filterRates } from '../src/utils/filterRates.js';
import { formatRate } from '../src/utils/formatCurrency.js';

const sampleRates = [
  { date: '2026-01-03', base: 'EUR', quote: 'USD', rate: 1.2 },
  { date: '2026-01-01', base: 'EUR', quote: 'USD', rate: 1.1 },
  { date: '2026-01-02', base: 'EUR', quote: 'USD', rate: 1.3 },
];

test('converte valor multiplicando pela taxa recebida', () => {
  assert.equal(calculateConversion(10, 1.2), 12);
});

test('aceita zero e valores positivos; rejeita vazio, texto e negativos', () => {
  assert.equal(isValidAmount('0'), true);
  assert.equal(isValidAmount('125.50'), true);
  assert.equal(isValidAmount(''), false);
  assert.equal(isValidAmount('abc'), false);
  assert.equal(isValidAmount('-1'), false);
});

test('calcula janela de sete dias incluindo a data final', () => {
  const range = calculatePeriod('7d', new Date(2026, 10, 3));
  assert.deepEqual(range, { from: '2026-10-28', to: '2026-11-03' });
});

test('subtrai meses sem avançar o mês quando a data inicial cai no fim do mês', () => {
  const range = calculatePeriod('3m', new Date(2026, 4, 31));
  assert.equal(range.from, '2026-02-28');
});

test('combina filtros de data e faixa de cotação', () => {
  const rows = filterRates(sampleRates, { dateFrom: '2026-01-02', dateTo: '2026-01-03', minRate: '1.25', maxRate: '1.35' }, { key: 'date', direction: 'asc' });
  assert.deepEqual(rows.map((row) => row.date), ['2026-01-02']);
});

test('ordena por cotação em ordem decrescente', () => {
  const rows = filterRates(sampleRates, { dateFrom: '', dateTo: '', minRate: '', maxRate: '' }, { key: 'rate', direction: 'desc' });
  assert.deepEqual(rows.map((row) => row.rate), [1.3, 1.2, 1.1]);
});

test('formata taxa numérica', () => {
  assert.equal(formatRate(1.25), '1,2500');
});
