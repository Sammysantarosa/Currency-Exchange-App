# Currency Exchange App — Arquitetura de Componentes

> Mapa inicial. Ajustar os nomes/arquivos caso a implementação validada pelo professor ou pelo time peça outra organização.

## 1. Estrutura sugerida

```text
src/
├── assets/
├── components/
│   ├── AppHeader/
│   │   ├── AppHeader.jsx
│   │   └── AppHeader.module.css
│   ├── ConverterCard/
│   │   ├── ConverterCard.jsx
│   │   └── ConverterCard.module.css
│   ├── CurrencySelect/
│   │   ├── CurrencySelect.jsx
│   │   └── CurrencySelect.module.css
│   ├── ConversionResult/
│   │   ├── ConversionResult.jsx
│   │   └── ConversionResult.module.css
│   ├── PeriodSelector/
│   │   ├── PeriodSelector.jsx
│   │   └── PeriodSelector.module.css
│   ├── ExchangeChart/
│   │   ├── ExchangeChart.jsx
│   │   └── ExchangeChart.module.css
│   ├── HistoryFilters/
│   │   ├── HistoryFilters.jsx
│   │   └── HistoryFilters.module.css
│   ├── ExchangeTable/
│   │   ├── ExchangeTable.jsx
│   │   └── ExchangeTable.module.css
│   └── FeedbackState/
│       ├── FeedbackState.jsx
│       └── FeedbackState.module.css
├── hooks/
│   ├── useCurrencies.js
│   ├── useExchangeRate.js
│   └── useHistoricalRates.js
├── services/
│   └── frankfurter.js
├── utils/
│   ├── calculatePeriod.js
│   ├── formatCurrency.js
│   ├── filterRates.js
│   └── exportCSV.js
├── constants/
│   └── periods.js
├── App.jsx
├── App.module.css
└── main.jsx
```

## 2. Componentes e responsabilidades

| Componente | Arquivo JSX | CSS Module | Responsabilidade | Principais props/estado |
|---|---|---|---|---|
| App | `App.jsx` | `App.module.css` | Compor a SPA e manter o estado compartilhado necessário. | Moedas, valor, período, filtros e ordenação. |
| AppHeader | `AppHeader.jsx` | `AppHeader.module.css` | Exibir nome/identidade da aplicação e navegação se houver. | Nenhuma obrigatória. |
| ConverterCard | `ConverterCard.jsx` | `ConverterCard.module.css` | Agrupar campos e ação de conversão. | `baseCurrency`, `quoteCurrency`, `amount`, callbacks. |
| CurrencySelect | `CurrencySelect.jsx` | `CurrencySelect.module.css` | Renderizar opções de moeda. | `label`, `currencies`, `value`, `onChange`. |
| ConversionResult | `ConversionResult.jsx` | `ConversionResult.module.css` | Exibir resultado, taxa e data efetiva. | `amount`, `rate`, `result`, `date`, `loading`, `error`. |
| PeriodSelector | `PeriodSelector.jsx` | `PeriodSelector.module.css` | Selecionar um dos oito períodos. | `value`, `options`, `onChange`. |
| ExchangeChart | `ExchangeChart.jsx` | `ExchangeChart.module.css` | Exibir série histórica em gráfico. | `data`, `baseCurrency`, `quoteCurrency`, `loading`. |
| HistoryFilters | `HistoryFilters.jsx` | `HistoryFilters.module.css` | Editar filtros de data e cotação. | `filters`, `onChange`, `onClear`. |
| ExchangeTable | `ExchangeTable.jsx` | `ExchangeTable.module.css` | Exibir dados, ordenação e total filtrado. | `rows`, `sort`, `onSort`, `resultCount`. |
| FeedbackState | `FeedbackState.jsx` | `FeedbackState.module.css` | Reutilizar estados de carregamento, erro e vazio. | `type`, `message`. |

## 3. Hooks customizados

| Hook | Responsabilidade | Retorno esperado |
|---|---|---|
| `useCurrencies` | Consultar e disponibilizar moedas. | `currencies`, `loading`, `error`. |
| `useExchangeRate(base, quote)` | Consultar cotação de um par. | `rate`, `loading`, `error`. |
| `useHistoricalRates(base, quote, period)` | Consultar série histórica. | `rates`, `loading`, `error`. |

Os hooks devem encapsular efeitos de consulta e estados relacionados. Evitar chamadas duplicadas quando os parâmetros não mudarem.

## 4. Serviços e utilitários

- `services/frankfurter.js`: funções assíncronas responsáveis por montar URLs, chamar `fetch`, validar `response.ok` e retornar dados.
- `utils/calculatePeriod.js`: calcular datas inicial/final para cada período.
- `utils/formatCurrency.js`: formatar valores e taxas com `Intl.NumberFormat`.
- `utils/filterRates.js`: aplicar filtros e ordenação à série histórica.
- `utils/exportCSV.js`: gerar e baixar o CSV no navegador.
- `constants/periods.js`: centralizar os oito períodos disponíveis.

## 5. Fluxo de dados

1. `App` mantém o estado compartilhado que precisa ser sincronizado entre conversor, gráfico e tabela.
2. `useCurrencies` carrega a lista de moedas.
3. `useExchangeRate` consulta a cotação atual quando origem/destino mudam.
4. A conversão é calculada no front-end a partir do valor informado e da taxa.
5. `useHistoricalRates` consulta a série histórica quando par/período mudam.
6. A tabela recebe a série, aplica filtros e ordenação, e informa a quantidade final.
7. `exportCSV` recebe exatamente a lista filtrada exibida na tabela.

## 6. Relação com os conceitos da disciplina

- Componentes funcionais e JSX: todos os componentes de interface.
- Props: comunicação entre `App` e componentes filhos.
- `useState`: estado de seleção, valor, período, filtros, ordenação e feedback.
- Lifting state up: estado compartilhado mantido no ancestral comum (`App`).
- `useEffect`: sincronização de consultas à API quando parâmetros mudam.
- Custom Hooks: encapsulamento de consultas e estados de API.
- Renderização de listas: opções de moedas, períodos e linhas da tabela, sempre com `key` estável.
- CSS Modules: estilos isolados por componente.
