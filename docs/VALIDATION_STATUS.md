# Status de validação — 03/11/2026

## Verificações executadas

| Verificação | Resultado | Observação |
|---|---|---|
| `npm audit` | APROVADO | 0 vulnerabilidades reportadas (0 info, low, moderate, high ou critical). |
| `npm test` | APROVADO | 7 testes automatizados aprovados, 0 falhas. |
| `npm run build` | APROVADO COM AVISO | Build concluído com Vite 6.4.5. Bundle JavaScript minificado de 573,40 kB, acima do limite de aviso de 500 kB. |
| Testes da Collection no Postman | APROVADO | Execução em 03/11/2026: 1 iteração, 9 testes aprovados, 0 reprovados e 0 erros. Detalhes em `docs/API_TESTS.md`. |
| Validação visual do Figma | CONCLUÍDA | Wireframes validados em baixa fidelidade e protótipo validado visualmente pelo desenvolvedor. [Abrir o Figma](https://www.figma.com/design/Zkcah3938CPoXImftwMC5L). |
| Validação manual no navegador | APROVADA | Concluída em 03/11/2026 para os cenários listados abaixo. |

## Cenários manuais aprovados no navegador

- Conversão de moedas.
- Alteração e inversão do par de moedas.
- Seleção dos oito períodos históricos.
- Filtros individuais e combinados.
- Ordenação da tabela.
- Download/exportação CSV.
- Responsividade em desktop e mobile.

Não há arquivos de captura de evidência salvos no repositório no momento; a pendência é apenas de evidências arquivadas.

## Pendência de validação da API

O cenário adicional da API para um período sem observações não foi executado e permanece pendente. Ele não fez parte dos nove testes aprovados da Collection. Consulte `docs/API_TESTS.md`.

**Os testes automatizados, o build, a Collection do Postman, a validação visual do Figma e os cenários manuais de navegador listados acima foram concluídos. O cenário de API sem observações e o arquivamento de capturas de evidência permanecem pendentes.**
