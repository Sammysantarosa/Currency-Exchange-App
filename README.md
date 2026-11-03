# Currency Exchange App

Aplicacao SPA para conversao e analise historica de moedas, desenvolvida com React, JavaScript e Vite, utilizando a API Frankfurter.

## Status de validacao — 03/11/2026

- `npm audit`: 0 vulnerabilidades reportadas.
- `npm test`: 7 testes aprovados, 0 falhas.
- `npm run build`: concluido com Vite 6.4.5. O build emitiu aviso porque o bundle JavaScript minificado excede 500 kB (573,40 kB).
- Testes manuais no navegador e no Postman continuam pendentes. Consulte `docs/VALIDATION_STATUS.md`, `docs/API_TESTS.md` e `docs/FIGMA.md`.

## Funcionalidades

- Selecao de moedas e conversao de valores.
- Exibicao de taxa e data efetiva.
- Historico em grafico e tabela.
- Periodos de 7/15/30 dias, 3/6 meses, 1/5/10 anos.
- Filtros por datas e faixa de cotacao.
- Ordenacao e exportacao CSV dos registros filtrados.
- Estados de carregamento, erro e ausencia de dados.

## Tecnologias

React, JavaScript, JSX, Vite, CSS Modules, Fetch API, Recharts, Postman, Git e GitHub.

## Documentacao

- `docs/REQUIREMENTS.md`
- `docs/COMPONENTS.md`
- `docs/FIGMA.md`
- `docs/API_TESTS.md`
- `docs/FUNCTION_TESTS.md`
- `docs/AI_USAGE.md`
- `docs/VALIDATION_STATUS.md`

## Instalacao e execucao

Requisitos: Node.js LTS e npm.

```bash
npm install
npm run dev
```

Para executar os testes automatizados:

```bash
npm test
```

Para validar a versao de producao:

```bash
npm run build
npm run preview
```

## API

- Base URL: `https://api.frankfurter.dev`
- Documentacao: https://frankfurter.dev/pt/

## Postman

A Collection esta em `postman/Currency-Exchange-App.postman_collection.json`. Os testes reais das requisicoes seguem pendentes; consulte `docs/API_TESTS.md`.

## Observacoes de implementacao

- A aplicacao consulta a Frankfurter API v2 diretamente do navegador.
- A conversao e calculada no front-end: valor informado × taxa retornada.
- A serie historica contem somente observacoes publicadas pela API; nao sao criadas cotacoes ficticias para dias sem publicacao.
- Os filtros sao aplicados localmente sobre a serie carregada e o CSV exporta a lista filtrada/ordenada.
