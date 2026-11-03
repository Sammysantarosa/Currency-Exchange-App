# Status de validacao — 03/11/2026

## Verificacoes executadas

| Verificacao | Resultado | Observacao |
|---|---|---|
| `npm audit` | APROVADO | 0 vulnerabilidades reportadas (0 info, low, moderate, high ou critical). |
| `npm test` | APROVADO | 7 testes aprovados, 0 falhas. |
| `npm run build` | APROVADO COM AVISO | Build concluido com Vite 6.4.5. Bundle JavaScript minificado de 573,40 kB, acima do limite de aviso de 500 kB. |
| Validacao estrutural do Postman JSON | APROVADO | JSON valido e quatro requisicoes presentes. Isso nao substitui a execucao manual no Postman. |

## Validacoes manuais pendentes

1. Executar `npm run dev` e validar a interface no navegador.
2. Executar manualmente no Postman as requisicoes descritas em `docs/API_TESTS.md` e registrar status e corpos reais.
3. Testar os oito periodos, mudanca/inversao de moedas, filtros individuais e combinados, ordenacao e download CSV.
4. Testar desktop e celular e guardar capturas de evidencia.
5. Criar o prototipo no Figma e atualizar `docs/FIGMA.md` com link e evidencias reais.

**A validacao automatizada e o build foram executados; a validacao manual de API/interface e o prototipo Figma seguem pendentes. Nao apresentar a versao como totalmente validada enquanto esses passos estiverem pendentes.**
