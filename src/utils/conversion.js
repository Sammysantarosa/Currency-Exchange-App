export function isValidAmount(value) {
  if (typeof value === 'string' && value.trim() === '') return false;
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0;
}

export function calculateConversion(amount, rate) {
  if (!isValidAmount(amount) || !Number.isFinite(Number(rate)) || Number(rate) < 0) {
    throw new Error('Valor ou taxa inválida para conversão.');
  }
  return Number(amount) * Number(rate);
}
