# Acelerar somente a página em espanhol `/es`

## Objetivo
Fazer a primeira tela aparecer mais rápido e reduzir o tempo de carregamento das fotos e depoimentos, especialmente em celulares com conexão lenta. Manter a mesma aparência, conteúdo, ofertas, conversão de moedas, checkout e funcionalidades.

As versões brasileiras não receberão mudanças de imagens, fontes, preços ou comportamento.

## O que foi confirmado
- A imagem principal usa um PNG de aproximadamente **2,65 MiB** e não possui prioridade explícita de carregamento.
- Três prints espanhóis de depoimentos têm aproximadamente **2,31, 1,75 e 1,69 MiB**. São pesos dos arquivos originais, não uma medição do tráfego de uma visita.
- Imagens das esteiras e de seções inferiores já usam carregamento sob demanda; portanto, adicionar isso novamente não resolve sozinho o problema.
- Os dois scripts do Wistia são carregados globalmente, embora o vídeo não seja exibido em `/es`.
- A conversão de moeda já ocorre no navegador, sem bloquear a apresentação inicial da oferta.

A contribuição real de cada item para a lentidão será medida antes da implementação. Ainda não há uma medição comparável de velocidade em produção.

## Plano de execução

### 1. Medir antes de alterar
- Medir `/es` no site publicado, com cache vazio, em condições de conexão móvel lenta e computador.
- Registrar tempo de exibição inicial, maior elemento visível (LCP), estabilidade da página (CLS), volume transferido e solicitações que competem com a primeira tela.
- Fazer pelo menos três medições nas mesmas condições e comparar a mediana, sem usar o servidor de desenvolvimento como referência de velocidade em produção.
- Identificar o verdadeiro elemento LCP: não presumir que a foto seja o maior elemento inicial em todos os tamanhos de tela.

### 2. Reduzir o peso das imagens — prioridade principal
- Criar versões WebP das imagens usadas em `/es`, com dimensões adequadas à exibição em celular e computador.
- Começar pela imagem principal, pelos três depoimentos maiores, pela foto da mentora, pelo mockup dos livros e pelas imagens da esteira.
- Preservar enquadramento, proporção, cores e legibilidade dos prints; não recortar nem substituir fotos.
- Fornecer tamanhos alternativos para que celulares não baixem versões maiores do que precisam.
- Manter os arquivos atuais disponíveis para as versões brasileiras e para publicações anteriores.

### 3. Priorizar a primeira tela
- Priorizar somente a imagem confirmada como candidata a LCP; adicionar preload na própria rota `/es` quando útil, sem baixar duas variantes da mesma imagem.
- Manter imagens inferiores sob demanda e usar decodificação assíncrona quando apropriado.
- Reservar as dimensões das imagens para evitar que textos e botões mudem de posição durante o carregamento.
- Ajustar o carregamento das esteiras apenas se a medição mostrar downloads prematuros, mantendo movimento contínuo e sem imagens vazias ao rolar.

### 4. Eliminar trabalho desnecessário sem afetar rastreamento
- Impedir o carregamento do Wistia em uma entrada direta em `/es`, preservando sua instalação e reprodução nas versões brasileiras.
- Validar também navegação entre versões: o vídeo deve continuar funcionando ao sair de `/es` para uma página brasileira.
- Não atrasar, remover, reinstalar ou reorganizar Meta Pixel, TikTok, UTMify, Clarity, persistência de UTMs ou captura de cliques.
- Manter a conversão de moedas independente do carregamento das imagens, com preço sempre visível e os mesmos critérios de câmbio e fallback.
- Não alterar fontes globais nesta etapa. Só considerar uma otimização específica de `/es` se houver impacto comprovado e possibilidade de isolamento sem mudar a tipografia brasileira.

### 5. Validar aparência, vendas e resultado
- Conferir todas as imagens, esteiras, oferta e botões em celular e computador.
- Testar o caminho completo: abrir `/es` com UTMs, clicar para ver a oferta, seguir ao checkout e conferir o destino e os parâmetros.
- Confirmar que rolagem local não gera InitiateCheckout e que o clique real mantém a deduplicação atual por pixel.
- Testar moeda local e falha de consulta de câmbio, sem modificar o preço-base existente nesta tarefa.
- Conferir `/`, `/v1`, `/v2` e `/v3` para garantir que imagens, ofertas, vídeo e rastreamento permaneceram intactos.
- Comparar desempenho antes/depois nas mesmas condições; apresentar peso economizado e tempos medidos, sem prometer uma pontuação ou tempo fixo antecipadamente.

## Detalhes técnicos
- Criar assets otimizados separados via Lovable Assets, mantendo os originais; não é uma migração dos arquivos existentes para CDN, pois eles já usam ponteiros de assets.
- Passar as imagens otimizadas pela configuração da rota espanhola ao componente compartilhado, com os valores atuais como padrão para as páginas brasileiras.
- Usar `srcset`/`sizes`, dimensões explícitas e prioridade de carregamento apenas onde aplicável. Não inventar parâmetros de transformação na URL do CDN nem criar um serviço de processamento de imagens.
- Isolar o carregamento do Wistia por página, mantendo a instalação única e cobrindo entrada direta e navegação interna.
- Preservar o code splitting automático das rotas; só separar código adicional se o perfil de execução justificar o custo.
- Manter testes de comportamento relevantes e documentar as decisões estruturais em `AGENTS.md` na implementação.

## Entrega e limites
Entregar `/es` mais leve, com a mesma experiência visual e um comparativo de medições. Não alterar textos, valores, checkout ou regras de venda; não remover funcionalidades para obter uma nota maior.

A implementação será verificada no preview. A publicação permanece uma ação separada, mediante seu pedido; a confirmação final de velocidade em produção exige a versão otimizada publicada.