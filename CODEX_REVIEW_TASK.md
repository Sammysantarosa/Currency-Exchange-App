# Codex — Revisão e validação da primeira versão

Você está no projeto acadêmico Currency Exchange App. Leia `docs/REQUIREMENTS.md`, `docs/COMPONENTS.md`, `docs/API_TESTS.md` e `docs/FUNCTION_TESTS.md` antes de alterar arquivos.

## Objetivo
Revisar a implementação atual e torná-la confiável, executável e aderente ao briefing do professor. Não reescreva o projeto inteiro sem necessidade.

## Regras
- Manter React + JavaScript + JSX + Vite.
- Manter CSS Modules; não adicionar Tailwind.
- Manter fetch + async/await e hooks customizados.
- Não inventar cotações nem substituir dados reais da Frankfurter por mocks na aplicação final.
- Não adicionar login, backend, banco de dados ou funcionalidades fora do escopo.
- Preservar a documentação e atualizar `docs/AI_USAGE.md` com as mudanças efetivamente feitas.
- Não afirmar que um teste passou sem executar o comando e observar o resultado.

## Verificações obrigatórias
1. `npm install`.
2. `npm test`.
3. `npm run build`.
4. Corrigir falhas reais encontradas.
5. Validar os endpoints usados em `src/services/frankfurter.js` com a documentação oficial e com a Collection de `postman/`.
6. Revisar se a conversão usa valor × taxa retornada.
7. Revisar os oito períodos, atualização de gráfico/tabela, filtros combinados, limpeza, ordenação e CSV somente filtrado.
8. Verificar loading, erro e ausência de dados para moedas, cotação e série histórica.
9. Revisar responsividade desktop/mobile e acessibilidade básica.
10. Não implementar datas ou cotações fictícias para dias sem publicação.

## Entrega da revisão
- Corrija o que for necessário.
- Informe os arquivos alterados e por quê.
- Informe os comandos executados e seus resultados literais.
- Liste pendências que ainda exigem teste manual no navegador/Postman.
- Não faça commits sem autorização do estudante.
