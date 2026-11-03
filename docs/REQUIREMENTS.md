# Currency Exchange App — Requisitos

> Versão inicial baseada no briefing do professor. Itens identificados como proposta/decisão pendente não devem ser tratados como exigências confirmadas até a validação.

## 1. Contexto

A aplicação centraliza consulta de taxas de câmbio, conversão de valores e análise histórica de pares de moedas em uma Single Page Application (SPA) desenvolvida com React e JavaScript. A fonte de dados será a API REST Frankfurter.

## 2. Público-alvo

Pessoas que precisam consultar taxas de câmbio, converter valores e analisar o histórico de um par de moedas sem recorrer a diferentes sites ou planilhas.

## 3. Objetivo

Permitir selecionar duas moedas, converter um valor usando a taxa retornada pela Frankfurter, consultar a data efetiva da cotação, visualizar o histórico em gráfico e tabela, filtrar/ordenar registros e exportar os resultados filtrados em CSV.

## 4. Escopo

### Incluído

- Seleção de moeda de origem e destino.
- Conversão de valor no front-end a partir da taxa obtida na API.
- Exibição de valor convertido, taxa e data efetiva.
- Inversão do par de moedas.
- Validação de entradas.
- Histórico nos períodos de 7 dias, 15 dias, 30 dias, 3 meses, 6 meses, 1 ano, 5 anos e 10 anos.
- Gráfico que acompanha mudanças de moeda e período.
- Tabela com data, moeda de origem, moeda de destino e cotação.
- Filtros combináveis por intervalo de datas e cotação mínima/máxima.
- Limpeza dos filtros, ordenação por data/cotação e contagem de registros.
- Exportação CSV dos registros filtrados, com cabeçalho e bloqueio de exportação vazia.
- Estados de carregamento, erro e ausência de dados.
- Responsividade desktop e mobile.

### Fora do escopo

Autenticação, cadastro de usuários, back-end próprio, banco de dados, pagamentos e compra/venda real de moedas.

## 5. Requisitos funcionais

| ID | Requisito | Critério de aceite |
|---|---|---|
| RF-01 | Carregar moedas disponíveis | A aplicação consulta a Frankfurter e disponibiliza as moedas retornadas para seleção. |
| RF-02 | Selecionar moeda de origem | O usuário consegue escolher a moeda base. |
| RF-03 | Selecionar moeda de destino | O usuário consegue escolher a moeda de cotação. |
| RF-04 | Informar valor | O usuário consegue digitar um valor numérico. |
| RF-05 | Converter valor | O sistema calcula `valor × taxa` usando a taxa obtida na API. |
| RF-06 | Exibir resultado | O sistema apresenta valor convertido, taxa e data efetiva retornada pela API. |
| RF-07 | Inverter moedas | A ação de inversão troca origem e destino e atualiza a cotação. |
| RF-08 | Validar entrada | Valores vazios, não numéricos ou negativos não devem gerar uma conversão válida. |
| RF-09 | Consultar histórico | O sistema consulta as cotações históricas para o par selecionado. |
| RF-10 | Selecionar período | O usuário pode escolher 7/15/30 dias, 3/6 meses, 1/5/10 anos. |
| RF-11 | Atualizar gráfico | Gráfico atualiza quando o par ou período muda. |
| RF-12 | Exibir tabela | A tabela mostra data, origem, destino e cotação para cada registro retornado. |
| RF-13 | Filtrar datas | O usuário pode definir data inicial e final. |
| RF-14 | Filtrar cotação | O usuário pode definir valor mínimo e máximo da cotação. |
| RF-15 | Combinar filtros | Filtros de data e cotação são aplicados simultaneamente. |
| RF-16 | Limpar filtros | Uma ação remove todos os filtros e restaura os registros correspondentes à consulta atual. |
| RF-17 | Ordenar registros | O usuário pode ordenar por data e por cotação, em ordem crescente/decrescente. |
| RF-18 | Contar resultados | A interface informa a quantidade de registros após os filtros. |
| RF-19 | Exportar CSV | O sistema gera no navegador um CSV com cabeçalhos e somente os registros filtrados. |
| RF-20 | Impedir CSV vazio | A exportação fica indisponível ou é bloqueada quando não há registros filtrados. |
| RF-21 | Tratar carregamento | A interface apresenta feedback durante consultas à API. |
| RF-22 | Tratar erros | A interface apresenta mensagem compreensível em falhas de rede/API. |
| RF-23 | Tratar ausência de dados | A interface informa quando não existem registros para o par/período/filtros. |

## 6. Requisitos não funcionais

| ID | Requisito | Critério de aceite |
|---|---|---|
| RNF-01 | SPA | A navegação e atualização dos dados ocorrem sem recarregar a página inteira. |
| RNF-02 | Tecnologias | React, JavaScript, JSX e Vite. |
| RNF-03 | Estilização | CSS Modules, evitando dependência de Tailwind para os estilos da aplicação. |
| RNF-04 | Organização | Componentes funcionais, responsabilidades claras, imports/exports e hooks reutilizáveis. |
| RNF-05 | API | Requisições com `fetch` e `async/await`, com tratamento de HTTP errors. |
| RNF-06 | Responsividade | Uso adequado em desktop e celular. |
| RNF-07 | Acessibilidade básica | Campos com labels, botões com nomes acessíveis, foco visível e estrutura semântica. |
| RNF-08 | Manutenibilidade | Separação de componentes, hooks, serviços, constantes e utilitários. |
| RNF-09 | Execução | Instalação e inicialização documentadas no README. |

## 7. Regras de negócio

- RN-01: A moeda de origem é enviada como `base` e a moeda de destino como `quote` na consulta à API.
- RN-02: A conversão é realizada pela aplicação com a fórmula `valor convertido = valor informado × taxa retornada`.
- RN-03: A aplicação deve exibir a data efetiva da cotação fornecida pela API, não presumir que seja a data atual.
- RN-04: A consulta histórica deve respeitar o par e o período selecionados.
- RN-05: A tabela e o gráfico devem representar os dados retornados pela API; não criar cotações fictícias para preencher dias sem publicação.
- RN-06: Os filtros devem ser combináveis e aplicados sobre os registros históricos carregados.
- RN-07: O CSV deve conter somente os registros que permanecem após a aplicação dos filtros e ordenação atual.
- RN-08: A exportação não deve gerar arquivo quando o resultado filtrado estiver vazio.
- RN-09: A aplicação não deve implementar autenticação, back-end próprio ou persistência em banco de dados.

## 8. Critérios gerais de aceite

- [ ] Consultar moedas disponíveis com a API.
- [ ] Converter um valor entre duas moedas com a taxa da API.
- [ ] Exibir taxa e data efetiva.
- [ ] Inverter moedas e atualizar o resultado.
- [ ] Tratar entrada inválida.
- [ ] Consultar os oito períodos históricos previstos.
- [ ] Atualizar gráfico ao mudar moeda/período.
- [ ] Exibir histórico em tabela.
- [ ] Aplicar filtros individuais e combinados.
- [ ] Limpar filtros.
- [ ] Ordenar por data e cotação.
- [ ] Mostrar total de registros encontrados.
- [ ] Exportar CSV filtrado com cabeçalhos.
- [ ] Bloquear exportação vazia.
- [ ] Mostrar loading, erro e ausência de dados.
- [ ] Funcionar em desktop e celular.
- [ ] Executar a partir das instruções do README.
- [ ] Entregar Figma, documentação e Collection do Postman.

## 9. Decisões/propostas para implementação

Estas escolhas são propostas práticas para viabilizar o desenvolvimento e podem ser ajustadas:

- Par inicial sugerido para demonstração: EUR → USD, pois o briefing usa esse par como requisição inicial no estudo da API.
- Interface em português e formatação numérica pt-BR.
- Períodos calculados a partir da data atual do dispositivo, usando a data final de hoje.
- Valor igual a zero pode ser aceito; valores negativos, vazios e não numéricos são inválidos.
- Quando origem e destino forem iguais, pode-se tratar a taxa como 1 localmente, sem depender de uma cotação externa.
- Dias sem publicação de cotação não devem ser inventados; a interface deve representar somente observações retornadas pela API.

## 10. Referências

- Briefing do professor: Projeto 01 — Currency Exchange App.
- Documentação oficial da Frankfurter: https://frankfurter.dev/pt/ e https://frankfurter.dev/.
