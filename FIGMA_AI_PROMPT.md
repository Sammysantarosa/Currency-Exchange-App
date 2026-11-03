# Prompt para Figma AI — Currency Exchange App

Crie um protótipo de alta qualidade para um produto web chamado **Currency Exchange**, uma ferramenta de conversão e análise histórica de moedas. A interface deve ser em **português brasileiro**.

## Contexto e objetivo

O usuário precisa selecionar duas moedas, informar um valor, consultar uma cotação de câmbio, acompanhar a evolução histórica do par em gráfico e tabela, aplicar filtros e exportar os resultados filtrados em CSV. O produto será implementado como SPA em React + JavaScript.

## Direção visual

- Aparência de dashboard financeiro moderno, confiável, sóbrio e profissional.
- Priorizar legibilidade, hierarquia visual e eficiência de uso.
- Fundo cinza muito claro/off-white, superfícies brancas, texto grafite e uma cor de destaque azul-petróleo ou azul profundo.
- Usar verde somente para variação positiva/sucesso e vermelho somente para variação negativa/erro.
- Cards com bordas finas e raio moderado; sombras discretas.
- Tipografia sans-serif clara; números tabulares para valores financeiros.
- Evitar excesso de gradientes, glassmorphism, ilustrações decorativas e aparência de landing page de startup.
- Usar ícones lineares consistentes.
- Criar componentes reutilizáveis com variantes e Auto Layout.

## Tela principal — Desktop (1440 px)

Estruture a tela nesta ordem:

1. **Cabeçalho:** marca textual Currency Exchange, subtítulo curto "Conversão e análise de câmbio", data da última atualização e indicador discreto de fonte de dados "Frankfurter API".
2. **Área do conversor:** card de destaque com dois seletores de moeda (Origem e Destino), campo numérico de valor, botão de inversão entre as moedas e ação "Converter". Mostrar resultado convertido em destaque, taxa utilizada e data efetiva da cotação.
3. **Histórico:** título "Histórico de cotação", descrição com o par selecionado e controles de período: 7 dias, 15 dias, 30 dias, 3 meses, 6 meses, 1 ano, 5 anos e 10 anos.
4. **Gráfico:** linha temporal limpa, com tooltip de data e taxa, eixos legíveis e legenda com o par de moedas. Não inventar indicadores/valores como se fossem dados reais; use placeholders claramente identificados como dados demonstrativos no protótipo.
5. **Tabela de histórico:** seção com filtros de data inicial/final, cotação mínima e máxima, botão "Limpar filtros", quantidade de registros e botão "Exportar CSV". A tabela deve exibir Data, Moeda de origem, Moeda de destino e Cotação. Permitir visualizar estados de ordenação por Data e Cotação.
6. **Rodapé discreto:** fonte das cotações e nota "As taxas são informativas e podem ter datas efetivas diferentes do dia atual".

## Responsividade — Mobile (390 px)

Crie uma adaptação real para celular, não apenas reduza a tela desktop:
- Cabeçalho compacto.
- Conversor em coluna única, com seletores e botão de inversão fáceis de tocar.
- Resultado com destaque visual.
- Períodos com chips roláveis horizontalmente.
- Gráfico ocupando a largura disponível.
- Filtros em painel recolhível ou campos empilhados.
- Tabela com rolagem horizontal controlada ou apresentação em cards, mantendo todos os campos exigidos.
- Botões e inputs confortáveis para toque.

## Estados obrigatórios

Crie variações de componentes ou frames para:

1. **Loading:** skeleton no resultado, gráfico e tabela; texto "Consultando cotações...".
2. **Erro:** mensagem objetiva "Não foi possível consultar as cotações" e botão "Tentar novamente".
3. **Sem dados:** mensagem "Nenhuma cotação encontrada para este período".
4. **Filtros sem correspondências:** mensagem "Nenhum registro corresponde aos filtros aplicados", com ação para limpar filtros.
5. **Validação de entrada:** campo do valor com mensagem de erro para valor vazio, texto ou número negativo.

## Requisitos de prototipação

- Criar um frame de wireframe de baixa fidelidade para desktop e outro para mobile.
- Criar os frames de protótipo visual desktop e mobile.
- Criar um Design Guide com paleta, tipografia, espaçamentos, botões, campos, cards, chips, tabela, tooltip e mensagens de estado.
- Usar Auto Layout e componentes para facilitar edição.
- Conectar no protótipo os fluxos principais: selecionar moedas, inverter o par, selecionar período, abrir filtros, limpar filtros e acionar exportação.
- Manter os textos em português brasileiro.
- Nomear frames e componentes de forma organizada.

## Limites do escopo

Não incluir login, cadastro, perfil de usuário, pagamentos, compra/venda real de moedas, backend próprio ou banco de dados.

O resultado deve parecer uma ferramenta de análise financeira pronta para ser implementada em React, sem inventar funcionalidades fora do briefing.
