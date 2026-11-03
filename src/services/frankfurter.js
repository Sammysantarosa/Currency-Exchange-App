const API_BASE_URL = 'https://api.frankfurter.dev/v2';

async function requestJSON(url, signal) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) {
    let message = `A API respondeu com status ${response.status}.`;
    try {
      const body = await response.json();
      if (body?.message) message = body.message;
    } catch {
      // Mantém a mensagem baseada no status quando o corpo não é JSON.
    }
    throw new Error(message);
  }

  return response.json();
}

export async function getCurrencies(signal) {
  const data = await requestJSON(`${API_BASE_URL}/currencies`, signal);
  if (!Array.isArray(data)) throw new Error('Formato inesperado ao carregar moedas.');
  return data.sort((a, b) => a.iso_code.localeCompare(b.iso_code));
}

export async function getExchangeRate(base, quote, signal) {
  if (!base || !quote) throw new Error('Selecione as duas moedas.');
  if (base === quote) {
    return { date: null, base, quote, rate: 1, isIdentity: true };
  }
  return requestJSON(`${API_BASE_URL}/rate/${encodeURIComponent(base)}/${encodeURIComponent(quote)}`, signal);
}

export async function getHistoricalRates(base, quote, from, to, signal) {
  if (!base || !quote) throw new Error('Selecione as duas moedas.');
  if (base === quote) return [];

  const params = new URLSearchParams({ from, to, base, quotes: quote });
  const data = await requestJSON(`${API_BASE_URL}/rates?${params.toString()}`, signal);
  if (!Array.isArray(data)) throw new Error('Formato inesperado ao consultar o histórico.');
  return data.sort((a, b) => a.date.localeCompare(b.date));
}
