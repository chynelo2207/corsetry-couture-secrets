# Instalar tag Google Ads

## Alterações
- Adicionar o ID `AW-18019840664` ao carregamento publicitário existente em todas as páginas.
- Carregar a biblioteca oficial `gtag.js` apenas quando a publicidade estiver permitida pela escolha de privacidade regional.
- Inicializar o Google Ads uma única vez para evitar registros duplicados durante a navegação.

## Validação
- Confirmar que a tag fica bloqueada antes do aceite em regiões reguladas.
- Confirmar que, após aceitar, a requisição do Google Ads usa o ID correto.
- Confirmar que recusar não carrega a nova tag.
