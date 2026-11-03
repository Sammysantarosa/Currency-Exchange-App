# Currency Exchange App — Testes da API Frankfurter

> **Status: testes manuais pendentes.** A Collection esta preparada, mas as requisicoes abaixo ainda aguardam execucao no Postman. Nenhum status HTTP ou corpo de resposta foi registrado como resultado observado.

## Base URL

`https://api.frankfurter.dev`

A API publica nao exige chave. A documentacao atual utiliza a versao `/v2`.

## Testes que aguardam execucao manual no Postman

| Caso | Metodo | Endpoint | O que validar | Status |
|---|---|---|---|---|
| Listar moedas | GET | `/v2/currencies` | Status HTTP, array e campos `iso_code`, `name`, `symbol`. | Pendente |
| Cotacao EUR → USD | GET | `/v2/rate/eur/usd` | Objeto com `date`, `base`, `quote`, `rate`; taxa numerica. | Pendente |
| Serie historica | GET | `/v2/rates?from={{startDate}}&to={{endDate}}&base=EUR&quotes=USD` | Array com datas e taxas; verificar ordenacao e formato. | Pendente |
| Moeda invalida | GET | `/v2/rate/eur/ABC` | Registrar status e corpo de erro retornado. | Pendente |
| Par sem observacoes no periodo | GET | Ajustar datas/par para intervalo sem resultados, quando possivel. | Verificar resposta real (array vazio ou erro). | Pendente |

## Roteiro

1. Executar cada requisicao da Collection.
2. Conferir status HTTP e corpo JSON.
3. Registrar a estrutura real retornada e a data do teste.
4. Validar como a API representa datas sem cotacao publicada.
5. Registrar comportamento de moeda invalida e intervalo sem resultados.
6. Atualizar a tabela abaixo somente com resultados observados no Postman.

## Resultados observados

Todos os casos acima permanecem pendentes de execucao manual. Nao inferir respostas a partir da documentacao ou da implementacao.

| Data do teste | Requisicao | Status HTTP | Resultado/observacao |
|---|---|---|---|
| Pendente | Listar moedas | Pendente | A preencher apos execucao no Postman. |
| Pendente | EUR → USD | Pendente | A preencher apos execucao no Postman. |
| Pendente | Historico | Pendente | A preencher apos execucao no Postman. |
| Pendente | Moeda invalida | Pendente | A preencher apos execucao no Postman. |
| Pendente | Sem observacoes | Pendente | A preencher apos execucao no Postman. |
