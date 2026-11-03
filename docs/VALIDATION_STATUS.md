# Status de validação — 03/11/2026

## Verificações executadas

| Verificação | Resultado | Observação |
|---|---|---|
| `npm audit` | APROVADO | 0 vulnerabilidades reportadas (0 info, low, moderate, high ou critical). |
| `npm test` | APROVADO | 7 testes aprovados, 0 falhas. |
| `npm run build` | APROVADO COM AVISO | Build concluído com Vite 6.4.5. Bundle JavaScript minificado de 573,40 kB, acima do limite de aviso de 500 kB. |
| Validação estrutural do Postman JSON | APROVADO | JSON válido e quatro requisições presentes. |
| Testes da Collection no Postman | APROVADO | Execução em 03/11/2026: 1 iteração, 9 testes aprovados, 0 reprovados e 0 erros. Detalhes em `docs/API_TESTS.md`. |

## Validações manuais pendentes

1. Executar `npm run dev` e validar a interface no navegador.
2. Testar os oito períodos, mudança/inversão de moedas, filtros individuais e combinados, ordenação e download CSV.
3. Testar desktop e celular e guardar capturas de evidência.
4. Criar o protótipo no Figma e atualizar `docs/FIGMA.md` com link e evidências reais.
5. Validar no Postman o cenário adicional de par sem observações no período, se necessário; esse cenário não fez parte da Collection executada.

**Os testes automatizados, o build e a execução informada da Collection Postman foram concluídos. A validação manual da interface e o protótipo Figma seguem pendentes.**
