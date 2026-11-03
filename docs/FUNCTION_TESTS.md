# Currency Exchange App — Testes de Funções

> Os casos automatizados iniciais estão em `tests/utils.test.js` e podem ser executados com `npm test`. Os cenários de API/DOM devem ser complementados durante a validação manual. Não marcar como aprovado antes da execução.

| ID | Função/cenário | Entrada | Resultado esperado | Status |
|---|---|---|---|---|
| FT-01 | Calcular conversão | Valor 10 e taxa 1.2 | Resultado 12 | Pendente |
| FT-02 | Converter valor zero | Valor 0 e taxa válida | Resultado 0, caso a regra seja mantida | Pendente |
| FT-03 | Validar campo vazio | `''` | Entrada inválida | Pendente |
| FT-04 | Validar texto | `'abc'` | Entrada inválida | Pendente |
| FT-05 | Validar valor negativo | `-10` | Entrada inválida | Pendente |
| FT-06 | Filtrar por data | Lista e intervalo válidos | Somente registros dentro do intervalo | Pendente |
| FT-07 | Filtrar por cotação | Mínimo/máximo | Somente taxas dentro dos limites | Pendente |
| FT-08 | Combinar filtros | Data e cotação | Registros que atendam a todos os filtros | Pendente |
| FT-09 | Limpar filtros | Filtros preenchidos | Retornar lista sem restrições de filtro | Pendente |
| FT-10 | Ordenar por data | Lista com datas diferentes | Ordem crescente/decrescente correta | Pendente |
| FT-11 | Ordenar por cotação | Lista com taxas diferentes | Ordem crescente/decrescente correta | Pendente |
| FT-12 | Gerar CSV | Lista filtrada | Cabeçalho e somente linhas filtradas | Pendente |
| FT-13 | Impedir CSV vazio | Lista vazia | Não iniciar download | Pendente |

## Resultado da execução inicial — 03/11/2026

Comando executado: `npm test`.

- 7 testes aprovados.
- 0 testes reprovados.
- Cobertura inicial: cálculo de conversão, validação do valor, período de 7 dias, subtração de meses no fim do mês, combinação de filtros, ordenação por cotação e formatação de taxa.

Ainda pendentes: testes de interação no navegador, chamadas de API reais no Postman, exportação via DOM/navegador e os demais cenários de aceite.

## Evidências

Adicionar comandos executados, prints ou resultados relevantes após a implementação.
