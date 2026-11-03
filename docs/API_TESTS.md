# Currency Exchange App — Testes da API Frankfurter

## Execução da Collection

- **Data:** 03/11/2026
- **Collection:** `Currency Exchange App - Frankfurter API`
- **Iterações:** 1
- **Duração:** 3.754 ms
- **Tempo médio de resposta:** 591 ms
- **Testes:** 9 aprovados, 0 reprovados
- **Erros:** 0

## Resultados por requisição

| Requisição | Endpoint | HTTP | Testes | Resultado observado |
|---|---|---:|---:|---|
| Moedas disponíveis | `GET /v2/currencies` | 200 | 3 aprovados | Requisição e três testes aprovados. |
| Cotação EUR para USD | `GET /v2/rate/eur/usd` | 200 | 2 aprovados | Requisição e dois testes aprovados. |
| Histórico EUR para USD | `GET /v2/rates?from=2026-10-01&to=2026-11-03&base=EUR&quotes=USD` | 200 | 3 aprovados | Requisição e três testes aprovados para o período de 01/10/2026 até 03/11/2026. |
| Moeda inválida EUR/ABC | `GET /v2/rate/eur/ABC` | 422 | 1 aprovado | Erro esperado; o teste que validou o erro foi aprovado. |

Os resultados acima registram status HTTP e contagem dos testes conforme a execução informada. Corpos de resposta e outros detalhes não foram fornecidos e não são inferidos aqui.

## Testes adicionais pendentes

A Collection executada não incluiu validação de par sem observações no período. Esse cenário permanece pendente de execução manual, se necessário.
